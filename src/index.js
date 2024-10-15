import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'admin-lte/dist/css/adminlte.min.css';  // AdminLTE CSS
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS
import 'admin-lte/dist/js/adminlte.min.js';  // AdminLTE JS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

