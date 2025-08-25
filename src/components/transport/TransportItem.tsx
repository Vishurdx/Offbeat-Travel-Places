
import React from 'react';
import { Clock, Calendar, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Transport } from '@/types/destination';
import TransportIcon from './TransportIcon';

interface TransportItemProps {
  item: Transport;
  index: number;
}

const TransportItem: React.FC<TransportItemProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="p-3 bg-white dark:bg-gray-800/50 rounded shadow-sm"
    >
      <div className="flex items-start">
        <div className="mt-1 mr-3 text-primary">
          <TransportIcon type={item.type} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
            {item.name}
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              from {item.from}
            </span>
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {item.details}
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
            {item.duration && (
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{item.duration}</span>
              </div>
            )}
            {item.frequency && (
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{item.frequency}</span>
              </div>
            )}
            {item.fareRange && (
              <div className="flex items-center text-amber-600 dark:text-amber-400">
                <Banknote className="h-3 w-3 mr-1" />
                <span>{item.fareRange}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransportItem;
