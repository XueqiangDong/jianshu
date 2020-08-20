import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./style";
import { GlobalStyleIconFont } from "./statics/iconfont/iconfont";

ReactDOM.render(
<React.StrictMode>
  <App></App>
  <GlobalStyle/>
  <GlobalStyleIconFont/>
 </React.StrictMode>,
  document.getElementById('root')
);
