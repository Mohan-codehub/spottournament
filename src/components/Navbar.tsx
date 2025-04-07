import React from 'react';
import { Menu, X, Search, Trophy } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SpotTournament
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="#" text="Tournaments" />
              <NavLink href="#" text="Live Scores" />
              <NavLink href="#" text="Rankings" />
              <NavLink href="#" text="Teams" />
              <NavLink href="#" text="Schedule" />
              <button className="text-gray-700 hover:text-blue-600 p-2">
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#" text="Tournaments" />
            <MobileNavLink href="#" text="Live Scores" />
            <MobileNavLink href="#" text="Rankings" />
            <MobileNavLink href="#" text="Teams" />
            <MobileNavLink href="#" text="Schedule" />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {text}
  </a>
);

const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
  >
    {text}
  </a>
);

export default Navbar;