import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from 'nanoid'

import DateTimeService from '@/services/datetime.service'

import { NewTodoType, TodoType } from '@/types/todo.types'

class TodoStore {

  showAddForm: boolean = false
  selectedItems: Array<string> = []
  todoList: Array<TodoType> = []

  constructor() {
    makeAutoObservable(this)
  }

  get count(): number {
    return this.todoList.length;
  }

  get getShowAddForm(): boolean {
    return toJS(this.showAddForm)
  }

  get getTodoList(): Array<TodoType> {
    return toJS(this.todoList).filter((todoItem: TodoType) => todoItem.deletedAt === undefined)
  }

  get getCompleted(): Array<TodoType> {
    return toJS(this.todoList).filter((todo: TodoType) => typeof todo.completedAt !== "undefined")
  }

  get getIncompleted(): Array<TodoType> {
    return toJS(this.todoList).filter((todo: TodoType) => typeof todo.completedAt === "undefined")
  }

  get getSelected(): Array<string> {
    return toJS(this.selectedItems)
  }

  setShowAddForm = (show: boolean): void => {
    this.showAddForm = show
  }

  toggleSelected = (todoId: string): void => {
    if (this.selectedItems.includes(todoId)) {
      const selectedIndex = this.selectedItems.findIndex((id: string) => id === todoId)
      this.selectedItems.splice(selectedIndex, 1)
    } else {
      this.selectedItems.push(todoId)
    }
  }

  toggleSelectAll = (todoListIds: Array<string>): void => {
    const selectedItems = toJS(this.selectedItems)

    if (selectedItems.length > 0) {
      this.selectedItems = []
    } else {
      this.selectedItems = todoListIds
    }
  }

  toggleCompleted = (todoId: string): void => {
    const todoList = toJS(this.todoList)

    const todoIndexAtId = todoList.findIndex((todo: TodoType) => todo.uuid === todoId)

    if (todoIndexAtId > -1) {
      if (!todoList[todoIndexAtId].completedAt) {
        todoList[todoIndexAtId].completedAt = DateTimeService.now()
      } else {
        todoList[todoIndexAtId].completedAt = undefined
      }

      this.todoList = todoList
    }
  }

  setCompleted = (todoListIds: Array<string>, completed: boolean): void => {
    const todoList = toJS(this.todoList)

    const newTodoList = todoList.map((todoItem: TodoType) => {

      if (todoListIds.includes(todoItem.uuid)) {
        todoItem.completedAt = completed ? DateTimeService.now() : undefined
      }

      return todoItem
    })

    this.todoList = newTodoList

  }

  addTodoItem = async (newTodo: NewTodoType): Promise<TodoType> => {
    const uuid = await nanoid()

    const todo: TodoType = {
      uuid: uuid,
      title: newTodo.title,
      details: newTodo?.details,
      category: newTodo?.category,
      creratedAt: DateTimeService.now()
    }

    this.todoList.push(todo);

    return todo
  }

  updateTodoItem = (todoId: string, todo: TodoType): TodoType => {
    const todoIndexAtId = this.todoList.findIndex((todo: TodoType) => todo.uuid === todoId)

    if (todoIndexAtId > -1 && todo) {
      this.todoList[todoIndexAtId] = todo;
    }

    return this.todoList[todoIndexAtId]
  }

  removeTodoItem = (todoId: string | Array<string>): void => {
    let newTodoList = toJS(this.todoList)

    if (typeof todoId === 'string') {

      const todoIndexAtId = this.todoList.findIndex((todo: TodoType) => todo.uuid === todoId)

      if (todoIndexAtId > -1) {
        newTodoList[todoIndexAtId].deletedAt = DateTimeService.now()
      }

    } else {
      newTodoList = this.todoList.map((todoItem: TodoType) => {
        if (todoId.includes(todoItem.uuid)) {
          todoItem.deletedAt = DateTimeService.now()
        }
        return todoItem
      })

    }
    
    this.todoList = newTodoList
    this.selectedItems = []

  }
}

export default TodoStore