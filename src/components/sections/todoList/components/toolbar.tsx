import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Icon from '@/component/shared/icon'

import { TodoType } from '@/types/todo.types';

type ToolbarProps = {
  todoList: Array<TodoType>
  selectedItems: Array<string>
  toggleSelectAll: (todoListIds: Array<string>) => void
  setCompleted: (todoListIds: Array<string>, completed: boolean) => void
  removeTodoItem: (todoId: string | Array<string>) => void
}

const Toolbar = (props: ToolbarProps) => {
  return (
    <Box display="flex" alignItems="center">

      <Box>
        <Box ml={2}>
          <Checkbox
            edge="start"
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': 'select-all' }}
            onChange={() => props.toggleSelectAll(props.todoList.map((todoItem: TodoType) => todoItem.uuid))}
            checked={props.selectedItems?.length > 0}
            indeterminate={props.selectedItems.length > 0 && props.selectedItems.length < props.todoList.length}
            disableRipple
          />
        </Box>
      </Box>

      {props.selectedItems?.length > 0 && (
        <Box display="flex">

          <Box ml={1}>
            <IconButton
              onClick={() => props.setCompleted(props.selectedItems, true)}
              disableRipple
            >
              <Icon name="task_alt" />
            </IconButton>
          </Box>

          <Box ml={1}>
            <IconButton
              onClick={() => props.setCompleted(props.selectedItems, false)}
              disableRipple
            >
              <Icon name="radio_button_unchecked" />
            </IconButton>
          </Box>

          <Box ml={1}>
            <IconButton
              onClick={() => props.removeTodoItem(props.selectedItems)}
              disableRipple
            >
              <Icon name="delete_outline" color="error" />
            </IconButton>
          </Box>

        </Box>
      )}

    </Box>
  );
};

export default Toolbar;