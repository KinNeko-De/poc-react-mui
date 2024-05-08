import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Ghost from './Wooooho/ghost';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/poc-react-mui",
    element: <App></App>,
    children: [
      {
        path: 'ghost',
        element: <Ghost />,
      },
    ],
  },
  {
    path: "/poc-react-mui/second",
    element: <Layout><Outlet /></Layout>,
    children: [
      {
        index: true,
        element: <Ghost />,
      },
      {
        path: 'ghost',
        element: <div><Ghost /><Outlet/></div>,
        children: [
          { index: true, element: <Ghost /> },
          {
            path: "more",
            element: <div><Ghost /><Ghost /></div>,
          },
          
        ],
      },
      

    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
