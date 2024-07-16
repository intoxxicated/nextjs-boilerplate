import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white dark:bg-secondary p-4 shadow-md fixed w-full z-10 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="Nexcent" width={154.49} height={24} className="mr-2" />
                    </Link>
                </div>
                {/* Mobile menu button */}
                <button
                    onClick={toggleMenu}
                    className="block lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20 5H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm0 5H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm0 5H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
                            />
                        )}
                    </svg>
                </button>
                {/* Mobile menu */}
                <nav className={`lg:hidden fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full items-end">
                        <div className="flex justify-end p-4">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-600 dark:text-gray-300 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="h-6 w-6 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-end justify-start flex-grow">
                            <Link href="#Home" className="text-d-grey dark:text-l-grey hover:underline my-4">
                                Home
                            </Link>
                            <Link href="#Features" className="text-d-grey dark:text-l-grey hover:underline my-4">
                                Features
                            </Link>
                            <Link href="#Community" className="text-d-grey dark:text-l-grey hover:underline my-4">
                                Community
                            </Link>
                            <Link href="#Blog" className="text-d-grey dark:text-l-grey hover:underline my-4">
                                Blog
                            </Link>
                            <Link href="#Pricing" className="text-d-grey dark:text-l-grey hover:underline my-4">
                                Pricing
                            </Link>
                            <Link href="/Register">
                                <button
                                    className="bg-green-500 border border-d-grey dark:border-l-grey text-white px-4 py-2 rounded hover:bg-grey-blue dark:hover:bg-silver my-4"
                                >
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* Desktop navigation */}
                <nav className="hidden lg:flex lg:items-center lg:space-x-4">
                    <Link href="#Home" className="text-d-grey dark:text-l-grey hover:underline">
                        Home
                    </Link>
                    <Link href="#Features" className="text-d-grey dark:text-l-grey hover:underline">
                        Features
                    </Link>
                    <Link href="#Community" className="text-d-grey dark:text-l-grey hover:underline">
                        Community
                    </Link>
                    <Link href="#Blog" className="text-d-grey dark:text-l-grey hover:underline">
                        Blog
                    </Link>
                    <Link href="#Pricing" className="text-d-grey dark:text-l-grey hover:underline">
                        Pricing
                    </Link>
                    <Link href="/Register">
                        <button
                            className="bg-green-500 border border-d-grey dark:border-l-grey text-white px-4 py-2 rounded hover:bg-grey-blue dark:hover:bg-silver"
                        >
                            Register Now
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
