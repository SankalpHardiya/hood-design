


import { Heart, ShoppingBag, User, Sun, Moon } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

/**
 * LogoMark: Minimal charcoal logo with warm off-white icon.
 */
const LogoMark = () => (
  <span className='flex h-7 w-7 items-center justify-center rounded-md bg-[#171717]'>
    <svg viewBox='0 0 16 16' className='h-3.5 w-3.5' aria-hidden='true'>
      <path
        d='M2 14V2h3l3 6 3-6h3v12h-3V8l-3 6-3-6v6z'
        fill='#F5F2EA'
      />
    </svg>
  </span>
);

const navItems = [
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
];

/**
 * Header: Sticky editorial navigation bar
 * using Warm Off-White (#F5F2EA) and Charcoal Black (#171717).
 */
export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='sticky top-0 z-40 border-b border-[#171717]/10 bg-[#F5F2EA]/90 backdrop-blur-md text-[#171717]'>
      <div className='mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10'>
        
        {/* Brand logo */}
        <Link to='/' className='flex items-center gap-2.5'>
          <LogoMark />
          <span className='display text-lg tracking-wide'>WRAP</span>
        </Link>

        {/* Desktop navigation */}
        <nav className='hidden items-center gap-10 text-[13px] font-medium md:flex'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#171717] after:transition-all after:duration-300',
                  isActive
                    ? 'text-[#171717] after:w-full'
                    : 'text-[#171717]/70 hover:text-[#171717] hover:after:w-full'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action buttons */}
        <div className='flex items-center gap-2.5'>
          
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-[#171717]/20 bg-[#F5F2EA] text-[#171717] transition-all duration-200 hover:border-[#171717]'
          >
            {theme === 'light' ? <Moon className='h-4 w-4' /> : <Sun className='h-4 w-4' />}
          </button>

          {/* Cart button */}
          <button
            aria-label='Cart'
            className='group flex h-9 items-center gap-2 rounded-full border border-[#171717]/20 bg-[#F5F2EA] px-3.5 text-[12px] font-semibold text-[#171717] transition-colors duration-200 hover:border-[#171717]'
          >
            <ShoppingBag className='h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12' />
            <span className='hidden sm:inline'>Cart (1)</span>
          </button>

          {/* Wishlist */}
          <button
            aria-label='Wishlist'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-[#171717]/20 bg-[#F5F2EA] transition-all duration-200 hover:border-[#171717]'
          >
            <Heart className='h-4 w-4 text-[#171717]' />
          </button>

          {/* Account */}
          <button
            aria-label='Account'
            className='hidden h-9 w-9 items-center justify-center rounded-full border border-[#171717]/20 bg-[#F5F2EA] transition-all duration-200 hover:border-[#171717] sm:flex'
          >
            <User className='h-4 w-4 text-[#171717]' />
          </button>
        </div>
      </div>
    </header>
  );
}