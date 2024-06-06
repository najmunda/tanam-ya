import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root, { loader as rootLoader } from './Routes/root';
import Gallery from './Routes/gallery';
import PlantDetail, { loader as plantLoader } from './Routes/plant';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: '',
        element: <Gallery />,
        loader: rootLoader,
      },
      {
        path: 'plant/:plantId',
        element: <PlantDetail />,
        loader: plantLoader,
      },
    ],
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
