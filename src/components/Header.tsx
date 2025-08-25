
import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Menu, X, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out p-4 sm:p-6",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/30 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2"
        >
          <Globe className="h-6 w-6 text-primary animate-float" />
          <span className="font-display text-xl tracking-tight font-medium">Offbeat Travel</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#exploration" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Compass className="mr-2 h-4 w-4 inline" />
            Exploration
          </a>
          <a href="#weather" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Weather Forecast
          </a>
          <a 
            href="#destinations" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Discover Places
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9 transition-colors hover:bg-accent"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container mt-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#exploration" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Compass className="mr-2 h-4 w-4 inline" />
              Exploration
            </a>
            <a 
              href="#weather" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Weather Forecast
            </a>
            <a 
              href="#destinations" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Discover Places
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
