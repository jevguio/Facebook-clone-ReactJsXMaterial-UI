import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Page/Dashboard.jsx'
import Error from './Page/Error.jsx'
import FacebookView from './Page/FacebookView.jsx'
import Login from './Page/Login.jsx' 
import '../src/index.css'

import App from './App.jsx';
import ThemeContextProvider from './context/ThemeContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline } from '@mui/material'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error error={true}></Error>
  },{
    path: "/Login",
    element: <Login></Login>,
    errorElement:<Error error={true}></Error>
  },  {
    path: "/Dashboard",
    element: <Dashboard></Dashboard>,
    errorElement:<Error errors={true}></Error>
  }, {
    path: "/PostView",
    element: <Dashboard page='preview'></Dashboard>,
    errorElement:<Error errors={true}></Error>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeContextProvider>
      <CssBaseline />
    <RouterProvider router={router} />
    
    </ThemeContextProvider>
  </React.StrictMode>,
)
