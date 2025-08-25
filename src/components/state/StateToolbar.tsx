
import React from 'react';
import { Filter, Search, Heart, DownloadCloud } from 'lucide-react';
import { Button } from '../ui/button';

interface StateToolbarProps {
  selectedState: string | null;
  showSearch: boolean;
  toggleSearch: () => void;
  clearSelection: () => void;
  handleDownloadGuide: () => void;
  handleAddToWishlist: () => void;
}

const StateToolbar: React.FC<StateToolbarProps> = ({
  selectedState,
  showSearch,
  toggleSearch,
  clearSelection,
  handleDownloadGuide,
  handleAddToWishlist
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleSearch}
          className="flex items-center gap-2"
        >
          <Search size={16} />
          {showSearch ? "Hide Search" : "Search States"}
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2"
          onClick={clearSelection}
          disabled={!selectedState}
        >
          <Filter size={16} />
          {selectedState ? "Clear Filter" : "All States"}
        </Button>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="default" 
          size="sm"
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
          onClick={handleDownloadGuide}
          disabled={!selectedState}
        >
          <DownloadCloud size={16} />
          Download Travel Guide
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-primary"
          onClick={handleAddToWishlist}
        >
          <Heart size={16} className="mr-2" />
          Add to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default StateToolbar;
