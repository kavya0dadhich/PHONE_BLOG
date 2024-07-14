import { createBrowserRouter } from "react-router-dom";
import App  from '../App.tsx'; // Note the curly braces around App

// Define the routes
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/s',
  },
]);