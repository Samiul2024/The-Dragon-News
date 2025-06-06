import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/pages/Home";
import CategoryNews from "../layouts/pages/CategoryNews";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayout from "../layouts/Authlayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                {
                    path:"/category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader:()=>fetch("/news.json"),
                }
            ]
        },
        {
            path:"/auth",
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>,
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>,
                },
            ]
        },
        {
            path:"/news",
            element:<h2>News Layout</h2>,
        },
        {
            path:"/*",
            element:<h2>Error</h2>,
        },
    ]
);
export default router;