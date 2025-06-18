import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock Next.js usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navigation', () => {
  it('renders navigation with brand name', () => {
    render(<Navigation />);
    
    expect(screen.getByText('Landing Page Builder')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navigation />);
    
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(screen.getByText('Page 2')).toBeInTheDocument();
  });

  it('has correct navigation structure', () => {
    render(<Navigation />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('renders navigation items as links', () => {
    render(<Navigation />);
    
    const page1Link = screen.getByText('Page 1').closest('a');
    const page2Link = screen.getByText('Page 2').closest('a');
    
    expect(page1Link).toHaveAttribute('href', '/landing/page-1');
    expect(page2Link).toHaveAttribute('href', '/landing/page-2');
  });
}); 