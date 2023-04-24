import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/index.jsx';
// importing the router
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> <-- we bypassing the app tag, using main.jsx as the main element*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
