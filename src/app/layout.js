"use client"

import {useState} from 'react';
import {Inter} from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({subsets: ['latin']});

export default function Layout({children}) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <html lang="en" className={darkMode ? 'dark' : ''}>
        <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="flex flex-col min-h-screen">
            <Header darkMode={darkMode}/>
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded"
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
