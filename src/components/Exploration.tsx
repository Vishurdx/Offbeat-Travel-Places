
import React from 'react';
import { Camera, Map, MapPin, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from "@/components/ui/carousel";

interface ExplorationCardProps { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  imagePath?: string;
  index: number;
}

const ExplorationCard: React.FC<ExplorationCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  imagePath,
  index
}) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover-scale overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="relative">
      {imagePath && (
        <div className="mb-6 h-40 overflow-hidden rounded-lg">
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
            }}
          />
        </div>
      )}
      <motion.div 
        className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6"
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "rgba(var(--primary), 0.2)"
        }}
      >
        <Icon className="h-6 w-6 text-primary" />
      </motion.div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </motion.div>
);

const Exploration: React.FC = () => {
  return (
    <section id="exploration" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
            Travel Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">Beyond the Beaten Path</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embrace the spirit of discovery as you venture into lesser-known destinations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ExplorationCard 
            icon={MapPin} 
            title="Undiscovered Places" 
            description="Find hidden gems and secluded spots that most travelers miss, providing authentic experiences away from crowds."
            imagePath="/images/mechuka1.jpg"
            index={0}
          />
          
          <ExplorationCard 
            icon={Camera} 
            title="Capture Memories" 
            description="Document extraordinary landscapes, cultural encounters, and unique moments that tell a richer travel story."
            imagePath="/images/anini1.jpg"
            index={1}
          />
          
          <ExplorationCard 
            icon={Mountain} 
            title="Connect with Nature" 
            description="Immerse yourself in pristine natural environments and witness breathtaking landscapes untouched by mass tourism."
            imagePath="/images/sangti1.jpg"
            index={2}
          />
          
          <ExplorationCard 
            icon={Map} 
            title="Cultural Immersion" 
            description="Engage with local communities, traditions, and heritage for a deeper understanding of India's diverse cultures."
            imagePath="/images/namsai1.jpg"
            index={3}
          />
        </div>
        
        {/* Testimonial Carousel */}
        <motion.div 
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Carousel 
            opts={{ loop: true, align: "center" }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="text-center p-6">
                  <blockquote className="relative max-w-3xl mx-auto">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-800" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <motion.p 
                      className="relative font-display text-2xl italic text-gray-900 dark:text-gray-100"
                      animate={{ 
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
                    </motion.p>
                    <footer className="mt-4">
                      <p className="text-base font-medium text-gray-600 dark:text-gray-300">Marcel Proust</p>
                    </footer>
                  </blockquote>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center p-6">
                  <blockquote className="relative max-w-3xl mx-auto">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-800" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <motion.p 
                      className="relative font-display text-2xl italic text-gray-900 dark:text-gray-100"
                      animate={{ 
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you.
                    </motion.p>
                    <footer className="mt-4">
                      <p className="text-base font-medium text-gray-600 dark:text-gray-300">Anthony Bourdain</p>
                    </footer>
                  </blockquote>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center p-6">
                  <blockquote className="relative max-w-3xl mx-auto">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-800" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <motion.p 
                      className="relative font-display text-2xl italic text-gray-900 dark:text-gray-100"
                      animate={{ 
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      We travel not to escape life, but for life not to escape us.
                    </motion.p>
                    <footer className="mt-4">
                      <p className="text-base font-medium text-gray-600 dark:text-gray-300">Anonymous</p>
                    </footer>
                  </blockquote>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static translate-y-0 ml-0" />
              <CarouselNext className="static translate-y-0 mr-0" />
            </div>
            <CarouselDots />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Exploration;
