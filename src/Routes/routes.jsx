import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <div>Home Page</div>
            }, 
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