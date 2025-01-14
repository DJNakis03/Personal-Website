import React from "react";
import { ReactDOM } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About_me from "./About-me";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },

    {
        path: '/about_me',
        element: <About_me/>,
    },
    
])

export default router