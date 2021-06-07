import { makeAutoObservable, toJS } from "mobx"

class ApplicationStore {

  show: boolean = false
  message: string | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get getShow(): boolean {
    return toJS(this.show)
  }

  get getMessage(): string | undefined {
    return toJS(this.message)
  }

  setShow = (show: boolean): void => {
    this.show = show
  }

  setMessage = (message: string | undefined): void => {
    this.message = message
  }
}

export default ApplicationStore