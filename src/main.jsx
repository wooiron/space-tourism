import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DestinationPage from './router/pages/Destination/index.jsx';
import CrewPage from './router/pages/crew/index.jsx';
import TechnologyPage from './router/pages/technology/index.jsx';
import HomePage from './router/pages/Home/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        elemet: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'destination',
        element: <DestinationPage />,
      },
      {
        path: 'crew',
        element: <CrewPage />,
      },
      {
        path: 'technology',
        element: <TechnologyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
