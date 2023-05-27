import React from "react";
import About from "./components/Router/About";
import Home from "./components/Router/Home";
import Contact from "./components/Router/Contact";

const routes = [
    {
        path: '/',
        exact: true,
        main: ()=> <Home/>
    },
        {
        path: '/about',
        exact: true,
        main: () => <About/>
    },
            {
        path: '/contact',
        exact: true,
        main: () => <Contact />
    },
                {
        path: '',
        exact: false,
        main: () => <Notfaut/>
    }
]