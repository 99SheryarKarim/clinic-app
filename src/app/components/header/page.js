'use client';
import {useState} from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import styles from './styles.module.css';

const navigationLinks = [
  {text: 'Home', href: '#'},
  {text: 'Services', href: '#'},
  {text: 'Our Team', href: '#'},
  {text: 'Contact Us', href: '#'},
  {text: 'FAQS', href: '#'},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={` ${styles['nav-bg']} h-[100vh] border-gray-200 `}>
        <div
          className={`border-b px-28 border-white max-w-screen-xl flex flex-wrap items-center justify-between p-6 ${styles['bg-color']} ${styles['fullWidth']}  relative z-10`}
        >
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-[68px] w-[68px]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LOGO
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute inset-0 bg-opacity-50 bg-custom-gradientHeader  "></div>
        <div className="font-inter font-light text-white italic text-5xl pl-24 pt-56  tracking-tighter relative z-10 hidden sm:hidden md:block">
          <h5>HEALTH IS</h5> <br />
          <h3 className="font-inter font-bold text-7xl  tracking-tighter">
            LOVE, COMPASSION
          </h3>{' '}
          <br />
          <h5>AND CARE</h5> <br />
        </div>
      </nav>
    </>
  );
}
