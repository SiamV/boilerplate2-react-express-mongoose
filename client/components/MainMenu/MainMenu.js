import React from 'react';
import {NavLink} from 'react-router-dom';


const MainMenu = () => {
    return (
        <nav>
            <NavLink to={'/articles'}>Articles</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </nav>
    )
}

export default MainMenu;