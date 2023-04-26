import React from 'react'

const Header = () => {
  return (
    <div className="header">
    <div className="nav container">
    <a href='index.html' className='nav_logo'>Anandhu</a>
    <div className="nav__menu">
    <ul className='nav__list grid'>
    <li className='nav__item'>
    <a href='' className='nav__link'>
    <i className='uil uil-estate nav__icon'>
    </i>
    Home
    </a>
    </li>

    <li className='nav__item'>
    <a href='' className='nav__link'>
    <i className='uil uil-user nav__icon'>
    </i>
    About
    </a>
    </li>

    <li className='nav__item'>
    <a href='' className='nav__link'>
    <i className='uil uil-file-alt nav__icon'>
    </i>
    Skills
    </a>
    </li>

    <li className='nav__item'>
    <a href='' className='nav__link'>
    <i className='uil uil-briefcase nav__icon'>
    </i>
    Services
    </a>
    </li>

    <li className='nav__item'>
    <a href='' className='nav__link'>
    <i className='uil uil-scenery nav__icon'>
    </i>
    Portfolio
    </a>
    </li>

    <li className='nav__item'>
    <a href='' className='nav__link'>
    <i className='uil uil-message nav__icon'>
    </i>
    Contact
    </a>
    </li>

    </ul>
    </div>
    </div>
    </div>
  )
}

export default Header