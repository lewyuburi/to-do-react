import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@/component/shared/icon'

type SnackbarViewProps = {
  show: boolean
  message?: string
  handleClose: () => void
}

const SnackbarView = (props: SnackbarViewProps) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={props.show}
      autoHideDuration={6000}
      message={props.message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleClose}>
          <Icon name="close" fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SnackbarView;