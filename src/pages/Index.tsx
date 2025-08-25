import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StateGrid from '@/components/StateGrid';
import Exploration from '@/components/Exploration';
import WeatherForecast from '@/components/WeatherForecast';
import Footer from '@/components/Footer';
import PopularTransport from '@/components/PopularTransport';
import { Info, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  const [showTip, setShowTip] = useState(false);

  // Show tips about app features after a delay
  useEffect(() => {
    const tipTimer = setTimeout(() => {
      setShowTip(true);
    }, 5000);

    return () => clearTimeout(tipTimer);
  }, []);

  // Preload important images
  useEffect(() => {
    // List of important images to preload
    const imageUrls = [
      '/images/mechuka1.jpg',
      '/images/mechuka2.jpg',
      '/images/mechuka3.jpg',
      '/images/anini1.jpg',
      '/images/anini2.jpg',
      '/images/sangti1.jpg',
      '/images/mayodia1.jpg',
      '/images/namsai1.jpg',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', // Fallback image
    ];

    // Preload images
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });

    // Show welcome toast with delay
    setTimeout(() => {
      toast.success("Welcome to Offbeat Travel Trove!", {
        description: "Discover hidden gems across India with travel & accommodation details.",
        duration: 5000,
      });
    }, 1000);
  }, []);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Add keyboard navigation for gallery
    const handleKeydown = (e: KeyboardEvent) => {
      // We need to check if there's a fullscreen element first
      const fullscreenElement = document.querySelector('[aria-label="Exit Fullscreen"]');
      
      if (e.key === 'Escape') {
        // Only handle ESC key if there's a fullscreen gallery element
        if (fullscreenElement) {
          e.preventDefault();
          (fullscreenElement as HTMLButtonElement).click();
          return;
        }
        
        // Otherwise, let the Dialog component handle ESC for closing
        const closeButtons = document.querySelectorAll('[aria-label="Close"]');
        if (closeButtons.length > 0) {
          (closeButtons[0] as HTMLButtonElement).click();
        }
      }
      
      if (e.key === 'ArrowRight') {
        const nextButtons = document.querySelectorAll('[aria-label="Next"]');
        if (nextButtons.length > 0) {
          (nextButtons[0] as HTMLButtonElement).click();
        }
      }
      
      if (e.key === 'ArrowLeft') {
        const prevButtons = document.querySelectorAll('[aria-label="Previous"]');
        if (prevButtons.length > 0) {
          (prevButtons[0] as HTMLButtonElement).click();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Create a function to show travel tips
  const handleTravelTips = () => {
    toast.info(
      "Travel Tips for Offbeat Destinations:",
      {
        duration: 10000,
        description: (
          <div className="space-y-2 text-sm">
            <p>1. Research local transport options before your journey</p>
            <p>2. Pack appropriate clothing for sudden weather changes</p>
            <p>3. Always carry some local currency for remote areas</p>
            <p>4. Respect local customs and traditions</p>
            <p>5. Try to book accommodations in advance during peak seasons</p>
          </div>
        ),
        action: {
          label: "Thanks!",
          onClick: () => {}
        }
      }
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-900 dark:from-gray-900 dark:to-black dark:text-white">
      <Header />
      <main className="flex-grow relative">
        <Hero />
        <StateGrid />
        <PopularTransport />
        <WeatherForecast />
        <Exploration />
        
        {/* Travel Tips notification */}
        {showTip && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Planning your offbeat journey?
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Check out our essential travel tips for exploring hidden gems across India.
                </p>
                <div className="mt-3 flex space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleTravelTips}
                  >
                    View Tips
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowTip(false)}
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
              <button
                type="button"
                className="ml-4 flex-shrink-0 flex text-gray-400 hover:text-gray-500"
                onClick={() => setShowTip(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
