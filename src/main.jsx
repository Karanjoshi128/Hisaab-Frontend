import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './contexts/context.jsx'

import axios from 'axios';
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:3000/api/users/v1';
// axios.defaults.baseURL = 'https://hisaab-backend-tl5q.onrender.com/api/users/v1';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
