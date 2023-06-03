import React from "react";
import About from "./components/Router/About";
import Home from "./components/Router/Home";
import Contact from "./components/Router/Contact";
import Add from "./components/Add";
import ShowProduct from "./components/Router/ShowProduct";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/admin',
        exact: true,
        main: () => <ShowProduct/>
    },
    {
        path: '/contact',
        exact: true,
        main: () => <Contact />
    },

    {
        path: '/Add',
        exact: true,
        main: ({ history }) => <Add history={history} />
    },

    {
        path: '',
        exact: false,
        main: () => <Notfaut />
    }
]

export { routes };