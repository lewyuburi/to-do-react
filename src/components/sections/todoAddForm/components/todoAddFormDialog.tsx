import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import Icon from '@/component/shared/icon'

import { getCategories } from '@/services/categories.service'

import { IAddTodoFormElement } from '@/types/todo.types'

type TodoAddFormDialogProps = {
  open: boolean
  onSubmit: (event: React.FormEvent<IAddTodoFormElement>) => void
  handleClose: () => void
}

const TodoAddFormDialog = (props: TodoAddFormDialogProps) => {

  const [expanded, setExpanded] = React.useState<boolean>(false)

  React.useEffect(() => {
    setExpanded(false)
  }, [])

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      maxWidth="sm"
      aria-labelledby="form-add-todo"
      fullWidth={true}
    >
      <form onSubmit={props.onSubmit}>
        <DialogTitle id="alert-dialog-title">
          Add new to-do
        </DialogTitle>
        <DialogContent>

          <TextField
            margin="dense"
            id="titleInput"
            label="Title"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle details"
                    onClick={() => setExpanded(!expanded)}
                    edge="end"
                  >
                    {expanded ? <Icon name="expand_less" /> : <Icon name="expand_more" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            required
            autoFocus
          />


          <Collapse in={expanded} timeout="auto" unmountOnExit>

            <TextField
              margin="dense"
              id="detailsInput"
              label="Details"
              variant="outlined"
              rows={3}
              multiline
              fullWidth
            />

            <RadioGroup aria-label="category" name="categoryInput" defaultValue="default">
              <Box display="flex">
                {getCategories().map((category: any) => (
                  <Radio
                    key={category.value}
                    id="categoryInput"
                    value={category.value}
                    inputProps={{ 'aria-label': category.label }}
                    color={category.value}
                  />
                ))}
              </Box>
            </RadioGroup>


          </Collapse>

        </DialogContent>
        <Divider />
        <DialogActions>

          <Button onClick={props.handleClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            color="primary"
          >
            Add new todo
          </Button>

        </DialogActions>
      </form>
    </Dialog>
  );
};

export default React.memo(TodoAddFormDialog);