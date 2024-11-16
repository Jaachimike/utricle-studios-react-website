import heroImage from "../assets/png/Mavians Concept Poster 1.png";

const AboutHeroSection = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[69dvh] overflow-hidden">
      {/* Image Background */}
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
          About Us
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-6xl">
          Home / About Us
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
