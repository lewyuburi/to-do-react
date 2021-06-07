import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'

import EmptyState from '@/component/shared/emptyState'

import { TodoType, IEditTodoFormElement } from '@/types/todo.types';

import ListItem from './components/listItem'
import Toolbar from './components/toolbar'
import EditAddFormDialog from './components/todoEditFormDialog'

import styles from './styles/todoList.module.scss'

type TodoListViewProps = {
  todoList: Array<TodoType>
  selectedItems: Array<string>
  page: number
  perPage: number
  totalTodoCount: number
  showForm: TodoType | undefined
  toggleCompleted: (todoId: string) => void
  toggleSelected: (todoId: string) => void
  setCompleted: (todoListIds: Array<string>, completed: boolean) => void
  toggleSelectAll: (todoListIds: Array<string>) => void
  removeTodoItem: (todoId: string | Array<string>) => void
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onEditFormSubmit: (event: React.FormEvent<IEditTodoFormElement>) => void
  setShowForm: (show: TodoType | undefined) => void
}

const TodoListView = (props: TodoListViewProps) => {

  return (
    <div className={styles.todoList}>

      {props.todoList.length === 0 && (
        <EmptyState
          icon="arrow_upward"
          title="It's empty in here"
          subtitle="Get started by adding some to-do items"
        />
      )}

      {props.todoList.length > 0 && (

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={(
            <Toolbar
              todoList={props.todoList}
              selectedItems={props.selectedItems}
              setCompleted={props.setCompleted}
              toggleSelectAll={props.toggleSelectAll}
              removeTodoItem={props.removeTodoItem}
            />
          )}
        >

          <Paper elevation={1}>
            {props.todoList.map((todoItem: TodoType) => (
              <ListItem
                key={todoItem.uuid}
                data={todoItem}
                selected={props.selectedItems.includes(todoItem.uuid)}
                toggleSelected={props.toggleSelected}
                toggleCompleted={props.toggleCompleted}
                removeTodoItem={props.removeTodoItem}
                onClick={props.setShowForm}
              />
            ))}
          </Paper>

          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 25]}
            count={props.totalTodoCount}
            page={props.page}
            rowsPerPage={props.perPage}
            onChangePage={props.onPageChange}
            onChangeRowsPerPage={props.onChangeRowsPerPage}
          />

        </List>

      )}

      <EditAddFormDialog
        open={props.showForm !== undefined}
        data={props.showForm}
        onSubmit={props.onEditFormSubmit}
        handleClose={() => props.setShowForm(undefined)}
      />

    </div>
  )
}

export default TodoListView