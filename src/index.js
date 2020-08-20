import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./style";
import { GlobalStyleIconFont } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <Fragment>
    <App></App>
    <GlobalStyle/>
    <GlobalStyleIconFont/>
  </Fragment>,
  document.getElementById('root')
);
