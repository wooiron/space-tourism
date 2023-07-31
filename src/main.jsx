import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DestinationPage from './router/pages/Destination/';
import CrewPage from './router/pages/crew';
import TechnologyPage from './router/pages/technology';
import HomePage from './router/pages/Home';
import MapPage from './router/pages/map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   index: true,
      //   elemet: <HomePage />,
      // },
      // {
      //   path: 'home',
      //   element: <HomePage />,
      // },
      {
        path: 'destination',
        element: <DestinationPage />,
      },
      // {
      //   path: 'crew',
      //   element: <CrewPage />,
      // },
      // {
      //   path: 'technology',
      //   element: <TechnologyPage />,
      // },
      // {
      //   path: 'map',
      //   element: <MapPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
