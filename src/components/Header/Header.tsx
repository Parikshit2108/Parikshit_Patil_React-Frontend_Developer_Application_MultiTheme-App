import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout, getRole } from '../../utils/auth';
import { useTheme } from '../../context/useTheme';
import type { Theme } from '../../context/ThemeContext';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const headerClasses: Record<Theme, string> = {
        light: 'bg-white text-gray-800',
        dark: 'bg-gray-900 text-white',
        colorful: 'bg-pink-200 text-pink-900',
    };

    const linkClasses: Record<Theme, string> = {
        light: 'hover:underline text-gray-800',
        dark: 'hover:underline text-white',
        colorful: 'hover:underline text-pink-900',
    };

    const selectClasses: Record<Theme, string> = {
        light: 'bg-white text-gray-800 border border-gray-300',
        dark: 'bg-gray-800 text-white border border-gray-600',
        colorful: 'bg-yellow-100 text-pink-900 border border-pink-300',
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 px-6 py-4 shadow z-50 transition-all duration-300 ${headerClasses[theme]}`}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">MultiThemeApp</h1>

                {/* Mobile toggle */}
                <button className="sm:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>

                {/* Desktop nav */}
                <nav className="hidden sm:flex space-x-4 items-center">
                    <Link to="/" className={linkClasses[theme]}>Home</Link>
                    <Link to="/about" className={linkClasses[theme]}>About</Link>
                    <Link to="/contact" className={linkClasses[theme]}>Contact</Link>
                    {getRole() === 'admin' && <Link to="/products" className={linkClasses[theme]}>Products</Link>}
                    <select
                        className={`ml-2 p-1 rounded ${selectClasses[theme]}`}
                        value={theme}
                        onChange={(e) => setTheme(e.target.value as Theme)}
                    >
                        <option value="light">Theme 1</option>
                        <option value="dark">Theme 2</option>
                        <option value="colorful">Theme 3</option>
                    </select>
                    {isAuthenticated() && (
                        <button
                            onClick={handleLogout}
                            className="ml-4 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                        >
                            Logout
                        </button>
                    )}
                </nav>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <nav className="sm:hidden mt-3 flex flex-col space-y-2">
                    <Link to="/" className={linkClasses[theme]} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className={linkClasses[theme]} onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className={linkClasses[theme]} onClick={() => setIsOpen(false)}>Contact</Link>
                    {getRole() === 'admin' && (
                        <Link to="/products" className={linkClasses[theme]} onClick={() => setIsOpen(false)}>Products</Link>
                    )}
                    <select
                        className={`mt-2 p-1 rounded w-40 ${selectClasses[theme]}`}
                        value={theme}
                        onChange={(e) => {
                            setTheme(e.target.value as Theme);
                            setIsOpen(false);
                        }}
                    >
                        <option value="light">Theme 1</option>
                        <option value="dark">Theme 2</option>
                        <option value="colorful">Theme 3</option>
                    </select>
                    {isAuthenticated() && (
                        <button
                            onClick={() => {
                                handleLogout();
                                setIsOpen(false);
                            }}
                            className="mt-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 w-40"
                        >
                            Logout
                        </button>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;
