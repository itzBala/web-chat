import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AuthContextProvider } from './contexts/AuthContext';

import './style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
