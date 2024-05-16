import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/header.css';
import ReactSwitch from 'react-switch'; // Ensure this is being used elsewhere
import DownloadCVButton from './DownloadCVButton';
import Aos from 'aos';

const Header = ({ toggleTheme, theme }) => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <nav className="bg-white header fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/logo.png?raw=true" className="max-h-20  md:left-20" alt="Logo" />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <DownloadCVButton />
            <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuVisible}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>

        <div className={`${isMenuVisible ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 font-medium  rounded-lg  md:space-x-8 md:flex-row md:mt-0  lg:px-20 sm:bg-transparent  xs:bg-red-300 ">
                <li className='nav__item '>
                    <a href="#home" className="block py-2 px-3   rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
                </li>
                <li className='nav__item '>
                    <a href="#about" className="block py-2 px-3  rounded hover:font-extrabold md:p-0 ">About</a>
                </li>
                <li className='nav__item '>
                    <a href="#skills" className="block py-2 px-3  rounded hover:font-extrabold md:p-0 ">Skills</a>
                </li>
                <li className='nav__item '>
                    <a href="#portfolio" className="block py-2 px-3  rounded hover:font-extrabold md:p-0 ">Projects</a>
                </li>
                <li className='nav__item '>
                    <a href="#contact" className="block py-2 px-3  rounded hover:font-extrabold md:p-0 ">Contact</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
