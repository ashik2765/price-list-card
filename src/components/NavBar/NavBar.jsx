import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const routes =[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'About',
            path:'/about'
        },
        {
            id:3,
            name:'Contact',
            path:'/contact'
        },
        {
            id:4,
            name:'Products',
            path:'/products'
        },
        {
            id:5,
            name:'Services',
            path:'/services'
        }
    ]
    return (
        <nav>
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          <ul className='md:flex text-none'>
          {
            routes.map(route => <Link 
                key={route.id}
                route={route}
                ></Link>)
           }
          </ul>
        </nav>
    );
};

export default NavBar;