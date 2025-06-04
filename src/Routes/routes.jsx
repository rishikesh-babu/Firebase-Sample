import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }, 
    {
        path: '/', 
        element: <Layout />,
        children: [
            {
                path: 'login', 
                element: <Login />
            }, 
            {
                path: 'signup', 
                element: <Signup />
            }
        ]
    }
])