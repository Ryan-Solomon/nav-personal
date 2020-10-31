import React, { useState } from 'react';
import useWindowSize from './hooks/useWindowSize';

const Nav = () => {
  const currentWindowWidth = useWindowSize();

  return (
    <>
      <nav className='header__nav'>
        <ul className='header__items'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
