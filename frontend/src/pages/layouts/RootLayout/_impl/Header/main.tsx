/**
 * @component Header
 * @summary Main navigation header
 * @domain core
 * @type layout-component
 * @category navigation
 */

import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/core/utils';

export const Header = () => {
  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/turmas', label: 'Turmas' },
    { to: '/metodologia', label: 'Metodologia' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary-600">
            Escola de Inglês
          </Link>

          <nav className="hidden md:flex md:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-primary-600',
                    isActive ? 'text-primary-600' : 'text-gray-700'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden" aria-label="Menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
