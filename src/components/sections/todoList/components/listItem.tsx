import { default as MaterialListItem } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Icon from '@/component/shared/icon'

import { TodoType } from '@/types/todo.types';

type ListItemProps = {
  data: TodoType
  selected: boolean
  toggleCompleted: (todoId: string) => void
  toggleSelected: (todoId: string) => void
  removeTodoItem: (todoId: string | Array<string>) => void
  onClick: (show: TodoType | undefined) => void
}

const ListItem = (props: ListItemProps) => {
  return (
    <MaterialListItem
      key={props.data.uuid}
      onClick={() => props.onClick(props.data)}
      selected={props.selected}
      divider
      button
    >

      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          inputProps={{ 'aria-labelledby': props.data.title }}
          onChange={() => props.toggleSelected(props.data.uuid)}
          checked={props.selected}
          disableRipple
        />
      </ListItemIcon>

      <ListItemText
        primary={(
          <Typography
            variant="body1"
            component={props.data?.completedAt === undefined ? 'span' : 'del'}
            color={props.data?.completedAt === undefined ? 'textPrimary' : 'textSecondary'}
          >
            {props.data.title}
          </Typography>
        )}
        secondary={(
          <Box display="flex">
            Created {props.data.creratedAt.fromNow()}{props.data?.completedAt ? `, completed ${props.data?.completedAt.fromNow()}` : ''}
          </Box>
        )}
      />


      <ListItemSecondaryAction>
        <Box display="flex" alignItems="center">

          {props.data?.category && (
            <Icon name="circle" color={props.data?.category} fontSize="small" />
          )}

          <IconButton aria-label="incomplete" onClick={() => props.removeTodoItem(props.data.uuid)}>
            <Icon name="delete_outline" color="error" />
          </IconButton>

          {!props.data.completedAt && (
            <IconButton edge="end" aria-label="completed" onClick={() => props.toggleCompleted(props.data.uuid)}>
              <Icon name="radio_button_unchecked" />
            </IconButton>
          )}

          {props.data?.completedAt && (
            <IconButton edge="end" aria-label="incomplete" onClick={() => props.toggleCompleted(props.data.uuid)}>
              <Icon name="task_alt" color="primary" />
            </IconButton>
          )}

        </Box>

      </ListItemSecondaryAction>
    </MaterialListItem>
  );
};

export default ListItem;