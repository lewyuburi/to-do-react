import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import { getCategories } from '@/services/categories.service'

import { IAddTodoFormElement, TodoType } from '@/types/todo.types'

type TodoAddFormDialogProps = {
  open: boolean
  data: TodoType | undefined
  onSubmit: (event: React.FormEvent<IAddTodoFormElement>) => void
  handleClose: () => void
}

const TodoAddFormDialog = (props: TodoAddFormDialogProps) => {

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
          To-do
        </DialogTitle>
        <DialogContent>

          <TextField
            margin="dense"
            id="titleInput"
            label="Title"
            variant="outlined"
            defaultValue={props.data?.title}
            fullWidth
            required
            autoFocus
          />

          <TextField
            margin="dense"
            id="detailsInput"
            label="Details"
            variant="outlined"
            defaultValue={props.data?.details}
            rows={3}
            multiline
            fullWidth
          />

          <RadioGroup aria-label="category" name="categoryInput" defaultValue={props.data?.category}>
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

          <Divider />

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
            Save
          </Button>

        </DialogActions>
      </form>
    </Dialog>
  );
};

export default React.memo(TodoAddFormDialog);