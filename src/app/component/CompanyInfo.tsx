import React from "react";
import Image from "next/image"; // Ensure you're importing from `next/image`

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#e8eff3]">
      {/* Left Logo */}
      <a href="/" >
        <Image
          src="/sLogo.png" // File must be in the /public directory
          alt="Company Logo Left"
          width={100} // Specify width
          height={80} // Specify height
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28"
        />
      </a>

      {/* Center Text */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold">
          शिक्षा महाकुंभ अभियान
        </h2>
        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold">
          Shiksha Mahakumbh Abhiyan
        </h2>
      </div>

      {/* Right Logo */}
      <a href="https://dhe.org.in" target="_blank" rel="noopener noreferrer">
        <Image
          src="/DHELogo.png" // File must also be in the /public directory
          alt="DHE Logo"
          width={100} // Specify width
          height={80} // Specify height
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28"
        />
      </a>
    </div>
  );
};

export default CompanyInfo;
