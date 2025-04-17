import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('/');

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/arrangements', label: 'Arrangements' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const links = navItems.map(({ path, label }, index) => (
    <Link
      key={index}
      to={path}
      onClick={() => setCurrentPage(path)}
      className={`nav-link ${currentPage === path ? 'active text-decoration-underline fw-bold' : 'text-dark'}`}
    >
      {label}
    </Link>
  ));

  return <NavBar links={links} />;
};