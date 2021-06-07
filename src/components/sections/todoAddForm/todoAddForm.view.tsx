import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'

import Icon from '@/component/shared/icon'

import { IAddTodoFormElement } from '@/types/todo.types'

import TodoAddFormDialog from './components/todoAddFormDialog'

import styles from './styles/todoAddForm.module.scss'

type TodoAddFormViewProps = {
  showForm: boolean
  onAddFormSubmit: (event: React.FormEvent<IAddTodoFormElement>) => void
  setShowForm: (show: boolean) => void
}

const TodoAddFormView = (props: TodoAddFormViewProps) => {
  return (
    <div className={styles.todoAddForm}>

      <Paper
        className={styles.addTodoButton}
        elevation={1}
        onClick={() => props.setShowForm(true)}
      >
        <IconButton aria-label="add-to-do">
          <Icon name="add_circle" color="primary" />
        </IconButton>
        
        <Typography
          component="span"
          color="primary"
        >
          Add a to-do
        </Typography>

      </Paper>

      <TodoAddFormDialog
        open={props.showForm}
        onSubmit={props.onAddFormSubmit}
        handleClose={() => props.setShowForm(false)}
      />

    </div>
  );
};

export default TodoAddFormView;