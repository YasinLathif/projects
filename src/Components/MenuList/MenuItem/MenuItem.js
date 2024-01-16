import React from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const MenuItem = ({ url, title, offset}) => {
  return (
    <li className='nav-item desktopMenuListItem'>
      <Link to={url} className='nav-link active' smooth={true} offset={offset} spy={true} duration={500} >
        {title}
      </Link>
    </li>
  )
}

MenuItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  offset: PropTypes.number,
}

export default MenuItem;