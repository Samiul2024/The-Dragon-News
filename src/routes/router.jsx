import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/pages/Home";
import CategoryNews from "../layouts/pages/CategoryNews";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayout from "../layouts/Authlayout";
import NewsDetails from "../layouts/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                }
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                },
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: () => fetch("/news.json"),
        },
        {
            path: "/*",
            element: <h2>Error</h2>,
        },
    ]
);
export default router;