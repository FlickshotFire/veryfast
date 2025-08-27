import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // Renamed from isMenuOpen for consistency with changes
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Assuming navItems structure matches the changes, if not, adjust accordingly
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`mobile-nav`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text hidden xs:inline">
              Raghukul Aryawart
            </span>
            <span className="text-lg font-bold gradient-text xs:hidden">
              Raghukul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-300 hover:text-green-400 transition-colors duration-200 py-2 px-1 text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 hover:w-full" />
              </Link>
            ))}

            <Button
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-sm xl:text-base px-4 xl:px-6"
              onClick={() => navigate('/#pledge')}
            >
              Take Pledge
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-touch text-gray-300 hover:text-green-400 transition-colors duration-200 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-green-500/20 safe-area-inset"
          >
            <div className="px-4 sm:px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="btn-touch w-full text-left text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-200 py-3 px-4 rounded-lg block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Button
                className="w-full btn-touch bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white mt-4 text-base"
                onClick={() => {
                  navigate('/#pledge');
                  setIsOpen(false);
                }}
              >
                Take Pledge
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;