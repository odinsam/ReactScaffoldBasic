import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from '../routes';
export default function Index() {
    const element = useRoutes(routes);
    return (
        <>
            <div>Index</div>
            {element}
        </>
    );
}
