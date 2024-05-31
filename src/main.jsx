import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Routes/Root';
import Signin from './Pages/Signin';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  /*
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: '',
        element: <Gallery />,
      },
      {
        path: 'plant/:plantId',
        element: <ProductDetail />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  */
  {
    path: '/signin',
    element: <Signin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
