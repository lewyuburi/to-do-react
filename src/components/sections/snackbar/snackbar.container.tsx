import React from 'react';
import { observer } from 'mobx-react-lite'

import { useStore } from '@/store/index';

import SnackbarView from './snackbar.view'

const SnackbarContainer = observer(() => {

  const { applicationStore } = useStore()

  return (
    <SnackbarView
      show={applicationStore.getShow}
      message={applicationStore.getMessage}
      handleClose={() => applicationStore.setShow(false)}
    />
  );
});

export default SnackbarContainer;