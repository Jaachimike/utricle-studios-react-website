import React from "react";
import {Link} from "react-router-dom";

const footerLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "#",
  },
  {
    name: "Our Works",
    to: "#",
  },
  {
    name: "Our Services",
    to: "#",
  },
  {
    name: "Contact",
    to: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-utricleBlack py-10 text-utricleGrey text-sm flex justify-center">
      <div>
        {/* nav links */}
        <div className="mb-4 space-x-3 md:space-x-5">
          {footerLinks.map(link => (
            <Link to={link.to}>{link.name}</Link>
          ))}
        </div>
        {/* copyright */}
        <p className="text-center">2024 Utricle Studios</p>
      </div>
    </div>
  );
};

export default Footer;
