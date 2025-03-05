import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [facultyDropdownOpen, setFacultyDropdownOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="px-4 lg:px-6 py-3">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://ltce.in/img_ltce/logo-b.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger Menu (Mobile) */}
                    <button
                        className="lg:hidden text-gray-700 text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`${
                            mobileMenuOpen ? "block" : "hidden"
                        } lg:flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-8">
                            <li>
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>

                            {/* Faculty (Dropdown) */}
                            <li className="relative">
                                <button
                                    onClick={() =>
                                        setFacultyDropdownOpen(!facultyDropdownOpen)
                                    }
                                    className="nav-link flex justify-between w-full lg:w-auto"
                                >
                                    Faculty ▼
                                </button>

                                {/* Dropdown Items */}
                                <ul
                                    className={`absolute lg:relative left-0 w-48 bg-white shadow-md lg:shadow-none transition-all duration-300 ${
                                        facultyDropdownOpen ? "block" : "hidden"
                                    } lg:block lg:opacity-100`}
                                >
                                    <li>
                                        <NavLink to="/HodDesk" className="dropdown-link">
                                            HOD Desk
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Teaching" className="dropdown-link">
                                            Teaching Staff
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/NonTeaching" className="dropdown-link">
                                            Non-Teaching Staff
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/academics" className="nav-link">
                                    Academics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/clubs" className="nav-link">
                                    Clubs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/events" className="nav-link">
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/placements" className="nav-link">
                                    Placements & Careers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* CSS Styling for NavLink */}
            <style>
                {`
                .nav-link {
                    display: block;
                    padding: 10px 16px;
                    color: #374151;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .nav-link:hover, .nav-link.active {
                    color: #1D4ED8;
                }
                .dropdown-link {
                    display: block;
                    padding: 10px 16px;
                    color: #374151;
                    background: white;
                    text-decoration: none;
                    transition: background 0.3s;
                }
                .dropdown-link:hover {
                    background: #f3f4f6;
                }
            `}
            </style>
        </header>
    );
}
