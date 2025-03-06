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
                    Home
                </Link>,
                <Link key={2} onClick={() => setCurrentPage('/arrangements')} className={`nav-link ${currentPage === '/arrangements' ? 'active text-dark bg-light shadow fw-bold' : 'text-light'}`} to="/arrangements">
                    Arrangements
                </Link>,
                <Link key={3} onClick={() => setCurrentPage('/contact')}className={`nav-link nav-section ${currentPage === '/contact' ? 'active text-dark bg-light shadow fw-bold' : 'text-light'}`} to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}