import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Employees from './compontens/pages/Employees';
import NewEmployee from './compontens/pages/NewEmployee';
import NewProject from './compontens/pages/NewProject';
import Projects from './compontens/pages/Projects';
import AssignProject from './compontens/pages/AssignProject';
import NewDepartment from './compontens/pages/NewDepartment';
import Departments from './compontens/pages/Departments';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Employees",
    element: <Employees/>,
  },
  {
    path: "/NewEmployee",
    element: <NewEmployee/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
  {
    path: "/NewProject",
    element: <NewProject/>,
  },
  {
    path: "/AssignProject",
    element: <AssignProject/>,
  },
  {
    path: "/NewDepartment",
    element: <NewDepartment/>,
  },
  {
    path: "/Departments",
    element: <Departments/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
