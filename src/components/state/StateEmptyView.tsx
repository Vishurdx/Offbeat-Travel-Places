
import React from 'react';
import { Map } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { states } from '@/data/destinations';

interface StateEmptyViewProps {
  setSelectedState: (state: string) => void;
}

const StateEmptyView: React.FC<StateEmptyViewProps> = ({ setSelectedState }) => {
  return (
    <motion.div 
      className="col-span-full flex flex-col items-center justify-center text-center p-8 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 p-4 rounded-full bg-primary/10 animate-float">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Map className="h-12 w-12 text-primary" />
        </motion.div>
      </div>
      <h3 className="text-xl font-bold mb-2">Select a state above</h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-md">
        Choose from the list of states to see offbeat destinations in that region.
        Each state has its own unique hidden gems waiting to be explored!
      </p>
      <Button 
        variant="outline" 
        size="lg" 
        className="mt-6 group"
        onClick={() => {
          const randomState = states[Math.floor(Math.random() * states.length)];
          setSelectedState(randomState);
        }}
      >
        <span className="mr-2 group-hover:translate-x-1 transition-transform">Surprise Me</span>
        <span className="group-hover:rotate-45 transition-transform inline-block">→</span>
      </Button>
    </motion.div>
  );
};

export default StateEmptyView;
