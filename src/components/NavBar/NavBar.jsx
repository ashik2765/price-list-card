import React from 'react';

const NavBar = () => {
    return (
        <nav>
           {
            routes.map(route =><li>{route.name}</li>)
           }
        </nav>
    );
};

export default NavBar;