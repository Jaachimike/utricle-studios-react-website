import instagram from "../assets/svg/icons8-instagram.svg";
import x from "../assets/svg/icons8-x-logo.svg";
import facebook from "../assets/svg/icons8-facebook-logo.svg";
import youtube from "../assets/svg/icons8-youtube.svg";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: instagram,
      href: "https://instagram.com/yourhandle",
      label: "Instagram",
    },
    {
      icon: x,
      href: "https://twitter.com/yourhandle",
      label: "X",
    },
    {
      icon: facebook,
      href: "https://facebook.com/yourpage",
      label: "Facebook",
    },
    {
      icon: youtube,
      href: "https://youtube.com/yourchannel",
      label: "Youtube",
    },
  ];

  return (
    <div className="absolute bottom-8 left-0 w-full z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:justify-start space-x-6">
          {socialLinks.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label={social.label}
            >
              <img src={social.icon} alt={social.label} className="h-8 w-8" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
