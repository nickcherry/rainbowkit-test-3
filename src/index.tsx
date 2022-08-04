// Polyfills
import { Buffer } from 'buffer';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

import './index.css';

window.Buffer = Buffer;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
