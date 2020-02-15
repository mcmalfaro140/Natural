import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom';

// lazy load all the views
const HomeLayout = React.lazy(() => import('./assets/pages/HomeLayout'));
const ContactLayout = React.lazy(() => import('./assets/pages/ContactLayout'));
const CateringLayout = React.lazy(() => import('./assets/pages/CateringLayout'));
const Menu = React.lazy(() => import('./assets/pages/Menu'));

const routes = [
    { path: '/Home', name: 'Home', component: HomeLayout, route: Route },
    { path: '/Contact', name: 'Contact', component: ContactLayout, route: Route },
    { path: '/Catering', name: 'Catering', component: CateringLayout, route: Route },
    { path: '/Menu', name: 'Menu', component: Menu, route: Route },
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/Home" />
    },
]

export {routes}