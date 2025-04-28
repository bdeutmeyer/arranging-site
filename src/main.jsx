import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Welcome from './pages/Welcome.jsx';
import Arrangements from './pages/arrangements/Arrangements.jsx';
import SongDetail from './pages/arrangements/SongDetail.jsx';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx';
import Error from './components/Error.jsx';
import ThankYou from './pages/ThankYou.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'arrangements',
        element: <Arrangements />,
      },
      {
        path: 'arrangements/:ext',
        element: <SongDetail />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'thank-you',
        element: <ThankYou />
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

