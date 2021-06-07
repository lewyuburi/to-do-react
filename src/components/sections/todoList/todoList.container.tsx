import React from 'react';
import { observer } from 'mobx-react-lite'

import { useStore } from '@/store/index'

import { TodoType, IEditTodoFormElement } from '@/types/todo.types';

import TodoListView from './todoList.view';

const TodoListContainer = observer(() => {

  const { applicationStore, todoStore } = useStore()

  const [showForm, setShowForm] = React.useState<TodoType | undefined>(undefined)
  const [todoList, setTodoList] = React.useState<Array<TodoType>>([])
  const [page, setPage] = React.useState<number>(0);
  const [perPage, setPerPage] = React.useState<number>(5)

  const getTodoList = React.useCallback(() => {
    const slice = todoStore.getTodoList.slice(page * perPage, page * perPage + perPage)
    setTodoList(slice)
  }, [page, perPage, todoStore.getTodoList])

  const onPageChange = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    todoStore.toggleSelectAll([])
  }

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const onEditFormSubmit = (event: React.FormEvent<IEditTodoFormElement>) => {

    event.preventDefault()

    const fields = event.currentTarget

    if (showForm) {
      const todoItem: TodoType = {
        ...showForm,
        title: fields.titleInput.value,
        details: fields?.detailsInput?.value,
        category: fields?.categoryInput?.value,
      }
  
      todoStore.updateTodoItem(showForm.uuid, todoItem)
  
      setShowForm(undefined)
    }

  }

  const onRemoveTodo = (todoId: string | Array<string>) => {
    todoStore.removeTodoItem(todoId)
    applicationStore.setMessage("The item was removed")
    applicationStore.setShow(true)
  }

  React.useEffect(() => {
    getTodoList()
  }, [todoStore.getTodoList, perPage, getTodoList])

  return (
    <TodoListView
      page={page}
      perPage={perPage}
      todoList={todoList}
      totalTodoCount={todoStore.getTodoList.length}
      selectedItems={todoStore.getSelected}
      showForm={showForm}
      onEditFormSubmit={onEditFormSubmit}
      toggleSelected={todoStore.toggleSelected}
      toggleSelectAll={todoStore.toggleSelectAll}
      toggleCompleted={todoStore.toggleCompleted}
      setCompleted={todoStore.setCompleted}
      removeTodoItem={onRemoveTodo}
      onPageChange={onPageChange}
      onChangeRowsPerPage={onChangeRowsPerPage}
      setShowForm={setShowForm}
    />
  )
})

export default TodoListContainer