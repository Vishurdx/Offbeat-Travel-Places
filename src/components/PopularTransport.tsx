
import React from 'react';
import { motion } from 'framer-motion';
import { Train, Bus, Plane, Car, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PopularTransport: React.FC = () => {
  const transport = [
    {
      type: 'train',
      title: 'Train Travel',
      description: "India's extensive rail network makes most offbeat destinations accessible with scenic journeys.",
      icon: <Train className="h-8 w-8" />,
      color: 'bg-blue-500',
      destinations: ['Araku Valley', 'Majuli Island', 'Chopta']
    },
    {
      type: 'bus',
      title: 'Bus Services',
      description: 'State transport and private buses reach remote areas with affordable rates.',
      icon: <Bus className="h-8 w-8" />,
      color: 'bg-green-500',
      destinations: ['Lambasingi', 'Dzüko Valley', 'Sunderbans']
    },
    {
      type: 'flight',
      title: 'Flight Connections',
      description: 'Regional airports are making remote locations more accessible than ever before.',
      icon: <Plane className="h-8 w-8" />,
      color: 'bg-purple-500',
      destinations: ['Kohima', 'Dibru-Saikhowa', 'Munsiyari']
    },
    {
      type: 'taxi',
      title: 'Local Transport',
      description: 'Shared jeeps and taxis provide the final connection to hidden destinations.',
      icon: <Car className="h-8 w-8" />,
      color: 'bg-amber-500',
      destinations: ['Saputara', 'Chopta', 'Dzüko Valley']
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
            Transportation Options
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting to India's Hidden Gems</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the various ways to reach India's most beautiful offbeat destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transport.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${item.color} p-6 flex justify-center`}>
                <motion.div 
                  className="text-white"
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Popular destinations:</div>
                  <div className="flex flex-wrap gap-1">
                    {item.destinations.map((dest) => (
                      <span key={dest} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        <MapPin className="h-3 w-3 mr-1" />
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full mt-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 group"
                  onClick={() => toast.info(`${item.title} options will be shown in each destination card`)}
                >
                  <span className="mr-1 group-hover:translate-x-0.5 transition-transform">View Options</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTransport;
