import dayjs from "dayjs";

export type BaseTodoType = {
  title: string
  details?: string
  category?: "inherit" | "disabled" | "action" | "default" | "primary" | "secondary" | "error"
}

export type TodoType = BaseTodoType & {
  uuid: string
  creratedAt: dayjs.Dayjs
  completedAt?: dayjs.Dayjs
  deletedAt?: dayjs.Dayjs
}

export type NewTodoType = BaseTodoType & {}

export interface IAddFormElements extends HTMLFormControlsCollection {
  titleInput: HTMLInputElement
  detailsInput?: HTMLInputElement
  categoryInput?: HTMLInputElement
}

export interface IAddTodoFormElement extends HTMLFormElement {
  readonly elements: IAddFormElements
}

export interface IEditFormElements extends HTMLFormControlsCollection {
  titleInput: HTMLInputElement
  detailsInput?: HTMLInputElement
  categoryInput?: HTMLInputElement
}

export interface IEditTodoFormElement extends HTMLFormElement {
  readonly elements: IEditFormElements
}