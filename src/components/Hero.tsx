
import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Sun, Cloud, CloudRain } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Array of background images to rotate through
  const backgroundImages = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    '/images/mechuka1.jpg',
    '/images/anini1.jpg',
    '/images/sangti1.jpg'
  ];
  
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Change background image every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prevIndex => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Floating particles for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay and Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              transform: `scale(1.05) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
              transition: 'transform 0.3s ease-out, opacity 1s ease-in-out',
            }}
          />
        ))}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-indigo-800/40 to-blue-900/70" 
          style={{
            backgroundPosition: `${50 + mousePosition.x * 5}% ${50 + mousePosition.y * 5}%`,
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-50"
            initial={{ 
              x: `${particle.x}vw`, 
              y: `${particle.y}vh`, 
              opacity: 0 
            }}
            animate={{ 
              x: [`${particle.x}vw`, `${particle.x + (Math.random() * 20 - 10)}vw`],
              y: [`${particle.y}vh`, `${particle.y - 20}vh`],
              opacity: [0, 0.7, 0]
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut" 
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
      
      {/* Floating Weather Icons */}
      <motion.div 
        className="absolute top-1/4 left-1/4 text-white/30 hidden md:block"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Sun size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 text-white/20 hidden md:block"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Cloud size={50} />
      </motion.div>
      
      <motion.div 
        className="absolute top-2/3 right-1/3 text-white/20 hidden md:block"
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <CloudRain size={30} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 text-white/30 hidden md:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 20, 0, -20, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Globe size={35} />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-pink-500 to-purple-500 backdrop-blur-sm shadow-lg">
            Discover the Unexplored
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl mx-auto text-shadow-lg"
        >
          Explore India's Hidden 
          <motion.span 
            className="relative inline-block ml-2"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: ["0px 0px 0px rgba(255,255,255,0.5)", "0px 0px 10px rgba(255,255,255,0.8)", "0px 0px 0px rgba(255,255,255,0.5)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="relative z-10 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent px-1">Travel</span>
          </motion.span>
          <motion.span 
            className="relative inline-block ml-2"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: ["0px 0px 0px rgba(255,255,255,0.5)", "0px 0px 10px rgba(255,255,255,0.8)", "0px 0px 0px rgba(255,255,255,0.5)"]
            }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
          >
            <span className="relative z-10 text-white bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent px-1">Gems</span>
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-shadow"
        >
          Venture beyond the tourist trail and discover the secret wonders of each state across India
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12"
        >
          <motion.a 
            href="#destinations" 
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg hover:shadow-xl h-12 px-8 py-3"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Places
          </motion.a>
        </motion.div>
        
        {/* Location indicators */}
        <div className="hidden md:flex absolute bottom-28 left-10 gap-3">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBgIndex ? 'bg-white scale-125' : 'bg-white/40'
              }`}
              onClick={() => setCurrentBgIndex(index)}
              aria-label={`View background ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#destinations"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="h-10 w-10" />
      </motion.a>
    </section>
  );
};

export default Hero;
