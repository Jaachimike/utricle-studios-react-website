import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";
import logo from "../assets/png/utricle_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="width-container">
        <div
          className={`flex justify-between items-center h-16 py-14 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="font-bold">
            <img
              src={logo}
              alt="Utricle Studios Logo"
              className={`h-26 w-24 ${
                isScrolled ? "filter brightness-50" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-gray-500 transition-colors ${
                  isScrolled
                    ? isActiveLink(item.path)
                      ? "border-b-2 border-black"
                      : "text-black"
                    : isActiveLink(item.path)
                    ? "border-b-2 border-white"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 ${
                isScrolled ? "bg-white" : "bg-black bg-opacity-80"
              }`}
            >
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 hover:bg-gray-200 rounded-md ${
                    isScrolled
                      ? isActiveLink(item.path)
                        ? "bg-gray-200 text-black"
                        : "text-black"
                      : isActiveLink(item.path)
                      ? "bg-gray-700 text-white"
                      : "text-white"
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
