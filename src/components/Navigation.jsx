import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'

//Navigation links
export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('/');
    
    return (
        <NavBar 
            links={[
                <Link key={1} onClick={() => setCurrentPage('/')}className={`nav-link  ${currentPage === '/' ? 'active text-dark bg-light shadow fw-bold' : 'text-light'}`} to="/">
                    About Me
                </Link>,
                <Link key={2} onClick={() => setCurrentPage('/portfolio')} className={`nav-link ${currentPage === '/portfolio' ? 'active text-dark bg-light shadow fw-bold' : 'text-light'}`} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} onClick={() => setCurrentPage('/resume')}className={`nav-link nav-section ${currentPage === '/resume' ? 'active text-dark bg-light shadow fw-bold' : 'text-light'}`} to="/resume">
                    Resume
                </Link>,
                <Link key={4} onClick={() => setCurrentPage('/contact')}className={`nav-link nav-section ${currentPage === '/contact' ? 'active text-dark bg-light shadow fw-bold' : 'text-light'}`} to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}