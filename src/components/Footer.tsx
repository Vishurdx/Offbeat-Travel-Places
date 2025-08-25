
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Instagram, Twitter, Github, HeartHandshake, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSocialClick = (platform: string) => {
    toast.info(`${platform} integration coming soon!`, {
      description: "We're working on our social media presence."
    });
  };
  
  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    toast.success("Thank you for subscribing!", {
      description: "You'll receive updates on new destinations soon."
    });
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 sm:py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Crafted with ❤️ in India
            </p>
          </div>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <button 
              onClick={() => handleSocialClick("Instagram")}
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleSocialClick("Twitter")}
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleSocialClick("Github")}
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-3 text-primary">
              <Mail className="h-6 w-6 mr-2" />
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Get updates on new hidden gems and travel tips from across India
            </p>
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
                onClick={handleSubscribe}
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Offbeat Travel Trove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
