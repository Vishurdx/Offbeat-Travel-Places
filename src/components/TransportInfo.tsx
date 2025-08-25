
import React from 'react';
import { Train, Bus, Plane, Car, Clock, Calendar, Banknote, Ship } from 'lucide-react';
import { motion } from 'framer-motion';
import { Transport } from '@/types/destination';
import TransportIcon from './transport/TransportIcon';
import TransportItem from './transport/TransportItem';

interface TransportInfoProps {
  transport: Transport[];
  isOpen: boolean;
}

const TransportInfo: React.FC<TransportInfoProps> = ({ transport, isOpen }) => {
  if (!isOpen || !transport || transport.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md"
    >
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Train className="mr-2 h-5 w-5 text-primary" />
        <span>How to Reach</span>
      </h3>
      <div className="space-y-4">
        {transport.map((item, index) => (
          <TransportItem key={`${item.name}-${index}`} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default TransportInfo;
