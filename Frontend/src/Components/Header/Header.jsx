import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="bg-white px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://ltce.in/img_ltce/logo-b.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            className="text-gray-700 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col lg:flex-row mt-4 lg:mt-0 lg:space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Faculty Dropdown */}
              <li className="relative group">
                <NavLink
                  className="block py-2 px-4 duration-200 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:p-0"
                >
                  Faculty
                </NavLink>
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <li>
                    <NavLink to="/HodDesk" className="block py-2 px-4 hover:bg-gray-100">
                      HOD Desk
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Teaching" className="block py-2 px-4 hover:bg-gray-100">
                      Teaching Staff
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/NonTeaching" className="block py-2 px-4 hover:bg-gray-100">
                      Non-Teaching Staff
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/Clubs" className={({ isActive }) => `block py-2 px-4 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`}>
                  Clubs
                </NavLink>
              </li>
              <li>
                <NavLink to="/Event" className={({ isActive }) => `block py-2 px-4 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`}>
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/Academics" className={({ isActive }) => `block py-2 px-4 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`}>
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink to="/Placements" className={({ isActive }) => `block py-2 px-4 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`}>
                  Placements & Career Opportunities
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className={({ isActive }) => `block py-2 px-4 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} hover:bg-gray-100 lg:hover:bg-transparent lg:p-0`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}