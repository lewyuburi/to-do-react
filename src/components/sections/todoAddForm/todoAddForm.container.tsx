import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from '@/store/index'

import TodoAddFormView from './todoAddForm.view'

import { IAddTodoFormElement, NewTodoType } from '@/types/todo.types'

type TodoAddFormContainerProps = {

}

const TodoAddFormContainer = observer((props: TodoAddFormContainerProps) => {

  const { todoStore } = useStore()

  const onAddFormSubmit = async (event: React.FormEvent<IAddTodoFormElement>) => {

    event.preventDefault()

    const fields = event.currentTarget

    const newTodoItem: NewTodoType = {
      title: fields.titleInput.value,
      details: fields?.detailsInput?.value,
      category: fields?.categoryInput?.value,
    }

    await todoStore.addTodoItem(newTodoItem)

    todoStore.setShowAddForm(false)
  }

  return (
    <TodoAddFormView
      showForm={todoStore.getShowAddForm}
      setShowForm={todoStore.setShowAddForm}
      onAddFormSubmit={onAddFormSubmit}
    />
  )
})

export default TodoAddFormContainer
