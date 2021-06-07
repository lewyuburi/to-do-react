import { createContext, useContext } from 'react'

import TodoStore from './todo';
import ApplicationStore from './application';

export interface IStore {
  applicationStore: ApplicationStore,
  todoStore: TodoStore
}

export const globalStore: IStore = {
  applicationStore: new ApplicationStore(),
  todoStore: new TodoStore()
}

export const StoreContext = createContext(globalStore);

export const StoreProvider = (props: any) => {
  return (
    <StoreContext.Provider value={globalStore}>
      {props.children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
