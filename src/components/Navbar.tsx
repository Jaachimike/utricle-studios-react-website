import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";
import logo from "../assets/png/utricle_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {name: "About Us", path: "/about"},
    {name: "Our Works", path: "/works"},
    {name: "Our Services", path: "/services"},
    {name: "Contact", path: "/contact"},
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="width-container">
        <div className="flex justify-between items-center h-16 py-14">
          {/* Logo */}
          <Link to="/" className="text-white font-bold">
            <img src={logo} alt="Utricle Studios Logo" className="h-26 w-24" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-gray-300 transition-colors ${
                  isActiveLink(item.path) ? "border-b-2 border-white" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md ${
                    isActiveLink(item.path) ? "bg-gray-700" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
