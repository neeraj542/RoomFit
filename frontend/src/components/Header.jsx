import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/image.png';
import axios from 'axios'; 
import { axiosInstanceUser} from '../axiosInstance';

import { AuthContext } from '../AuthContext';  

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useContext(AuthContext);

    function pathMatchRoute(route) {
        return location.pathname === route;
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = async () => {
        try {
            const response = await axiosInstanceUser.post('/logout');
            console.log('Logout response:', response.data);

            logout(); //clearing the state
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div className='flex items-center py-1 cursor-pointer'>
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt='logo' className='w-12 h-12 mr-2' />
                        <h1 className='text-2xl sm:text-3xl text-primary font-bold'>FlatInflux</h1>
                    </Link>
                </div>
                <div className='sm:hidden'>
                    <button
                        onClick={toggleMenu}
                        type='button'
                        className='block text-gray-600 hover:text-primary focus:text-primary focus:outline-none'
                    >
                        <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                            {isOpen ? (
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M20 4H4C2.897 4 2 4.897 2 6V7C2 8.103 2.897 9 4 9H20C21.103 9 22 8.103 22 7V6C22 4.897 21.103 4 20 4ZM4 12H20C21.103 12 22 12.897 22 14V15C22 16.103 21.103 17 20 17H4C2.897 17 2 16.103 2 15V14C2 12.897 2.897 12 4 12ZM20 20H4C2.897 20 2 20.897 2 22V23C2 24.103 2.897 25 4 25H20C21.103 25 22 24.103 22 23V22C22 20.897 21.103 20 20 20Z'
                                />
                            ) : (
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M21 6H3V8H21V6ZM21 13H3V15H21V13ZM21 20H3V22H21V20Z'
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`sm:flex items-center justify-end space-x-6 ${isOpen ? 'block fixed top-0 left-0 w-full h-full bg-white z-50 p-6' : 'hidden'}`}>
                    <button
                        className="block sm:hidden text-gray-600 hover:text-primary focus:text-primary focus:outline-none"
                        onClick={closeMenu}
                    >
                        <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z' />
                        </svg>
                    </button>
                    <ul className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm font-bold text-secondary'>
                        <li
                            className={`cursor-pointer py-3 border-b-3 border-transparent ${pathMatchRoute("/") && "text-primary border-b-accent"}`}
                            onClick={() => { navigate("/"); setIsOpen(false); }}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer py-3 border-b-3 border-transparent ${pathMatchRoute("/all-posts") && "text-primary border-b-accent"}`}
                            onClick={() => { navigate("/all-posts"); setIsOpen(false); }}
                        >
                            All Posts
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li
                                    className={`cursor-pointer py-3 border-b-3 border-transparent ${pathMatchRoute("/profile") && "text-primary border-b-accent"}`}
                                    onClick={() => { navigate("/profile"); setIsOpen(false); }}
                                >
                                    Profile
                                </li>
                                <li
                                    className={`cursor-pointer py-3 border-b-3 border-transparent`}
                                    onClick={handleLogout} // Call handleLogout function for logout action
                                >
                                    Logout
                                </li>
                            </>
                        ) : (
                            <>
                                <li
                                    className={`cursor-pointer py-3 border-b-3 border-transparent ${pathMatchRoute("/login") && "text-primary border-b-accent"}`}
                                    onClick={() => { navigate("/login"); setIsOpen(false); }}
                                >
                                    Login
                                </li>
                                <li
                                    className={`cursor-pointer py-3 border-b-3 border-transparent ${pathMatchRoute("/register") && "text-primary border-b-accent"}`}
                                    onClick={() => { navigate("/register"); setIsOpen(false); }}
                                >
                                    Register
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
