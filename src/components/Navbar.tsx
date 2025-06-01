
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Switch } from '@/components/ui/switch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-slate-900 shadow-md py-3' 
        : 'bg-transparent dark:bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold text-primary">
            Ruman<span className="text-gray-800 dark:text-white">Dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <Sun size={18} className="text-yellow-500 dark:text-yellow-200" />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon size={18} className="text-gray-500 dark:text-blue-300" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Download CV
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Sun size={16} className="text-yellow-500 dark:text-yellow-200" />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon size={16} className="text-gray-500 dark:text-blue-300" />
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 dark:text-white hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 shadow-md animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
