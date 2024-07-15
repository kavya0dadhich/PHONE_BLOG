import { createBrowserRouter } from "react-router-dom";
import App  from '../App.tsx'; // Note the curly braces around App
import Home from "../pages/home.tsx";
import Upload from "../pages/upload.tsx";
import Dashborad from "../pages/dashborad.tsx";

// Define the routes
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        index: true,
        element: <Dashborad />,
      }, 
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/uplode',
        element: <Upload />,
      },
    ]
  },
  
]);