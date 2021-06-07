import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Snackbar from '@/component/sections/snackbar'

import { StoreProvider } from '@/store/index'

import RouterComponent from './router';
import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <StoreProvider>
    <CssBaseline />
    <RouterComponent />
    <Snackbar />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
