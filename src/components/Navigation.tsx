'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navigation.css';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/landing/page-1', label: 'Page 1' },
    { href: '/landing/page-2', label: 'Page 2' },
  ];

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="nav-brand">
            Landing Page Builder
          </Link>
          
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 