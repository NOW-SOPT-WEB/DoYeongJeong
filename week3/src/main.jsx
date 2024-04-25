import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import ResetStyles from './styles/reset.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Global styles={ResetStyles} />
    <App />
  </>,
);
