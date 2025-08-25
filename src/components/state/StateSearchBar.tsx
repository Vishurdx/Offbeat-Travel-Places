
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../ui/input';

interface StateSearchBarProps {
  showSearch: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const StateSearchBar: React.FC<StateSearchBarProps> = ({ 
  showSearch, 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <AnimatePresence>
      {showSearch && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 overflow-hidden"
        >
          <Input
            type="text"
            placeholder="Search for a state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StateSearchBar;
