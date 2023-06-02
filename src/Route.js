import React from "react";
import About from "./components/Router/About";
import Home from "./components/Router/Home";
import Contact from "./components/Router/Contact";
import Add from "./components/Add";

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
        path: '/Add',
        exact: true,
        main: ({ history }) => <Add history={history} />
    },
    
                {
        path: '',
        exact: false,
        main: () => <Notfaut/>
    }
]