import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom';

// lazy load all the views
const HomeLayout = React.lazy(() => import('./assets/pages/HomeLayout'));

const routes = [
    { path: '/Home', name: 'Home', component: HomeLayout, route: Route },
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/Home" />
    },
]

export {routes}