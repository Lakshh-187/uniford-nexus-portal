
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResourcesModal from './ResourcesModal';

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);

  const handleUnifordClick = () => {
    window.open('https://www.uniford.org', '_blank');
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">UNCIF</div>
                <div className="text-xs text-purple-600">Uniford National Council</div>
              </div>
            </Link>

            {/* Centered Uniford Foundation Button */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <Button
                onClick={handleUnifordClick}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-2 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Uniford Foundation
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Resources Button */}
            <div className="hidden md:flex">
              <Button
                onClick={() => setShowResources(true)}
                variant="ghost"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Resources & Downloads
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Button
                    onClick={handleUnifordClick}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 justify-center"
                  >
                    Uniford Foundation
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    onClick={() => setShowResources(true)}
                    variant="ghost"
                    className="text-lg font-medium text-gray-700 hover:text-purple-600 justify-start"
                  >
                    Resources & Downloads
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <ResourcesModal 
        isOpen={showResources}
        onClose={() => setShowResources(false)}
      />
    </>
  );
};

export default Navbar;
