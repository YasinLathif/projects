import React, { useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import MenuList from '../MenuList/MenuList';
import DarkMode from '../DarkMode/DarkMode';

const Header = () => {
  useEffect(() => {
    // Add event listener to collapse the navbar when clicking outside
    const handleCollapse = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Simulate a click on the toggler to collapse the navbar
      }
    };

    document.body.addEventListener('click', handleCollapse);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleCollapse);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-sm fixed-top custom-navbar">
        <div className="container-fluid">
          <a href="/" className='text-decoration-none text-white'>
            <div className='d-flex align-items-center'>
              <img src={logo} alt="logo img-fluid" className="navbar-brand logo" />
              <h3 className="mx-1">Yasin.dev</h3>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <MenuList />
            <DarkMode />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
