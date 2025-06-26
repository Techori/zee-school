import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="logo">
                <img src="logo.jpg" alt="Zee School Logo" className="h-12 w-auto m-0 p-0" />
                {/* <h1 class="ml-2 text-2xl font-bold">Zee School</h1>  <!-- Remove if only image is needed --> */}
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90">
              Admission
            </Button>
            <Button
              className="ml-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition-colors"
            >
              Login
            </Button>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Admission
                </Button>
                <Button
                  className="w-full mt-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition-colors"
                >
                  Login
                </Button>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
