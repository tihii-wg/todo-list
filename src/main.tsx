import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '../src/App/index';
import '../src/styles/reset.scss';
import '../src/styles/common.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
