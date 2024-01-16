import React from 'react';
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {

  const navItems = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
      offset: -100,
    },
    {
      id: 2,
      title: 'About',
      url: 'about',
      offset: -115,
    },
    {
      id: 3,
      title: 'Portfolio',
      url: 'projects',
      offset: -90,
    },
    {
      id: 4,
      title: 'Contact',
      url: 'contact',
      offset: -90,
    },
  ]
  return (
    <>
      <ul className='navbar-nav'>
        {navItems.map((navItem) => (
          <MenuItem key={navItem.id} {...navItem} useReactRouter={true}/>
        ))}
      </ul>
    </>
  )
}

export default MenuList;