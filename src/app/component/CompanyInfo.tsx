import React from "react";
import Image from "next/image"
const CompanyInfo: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#e8eff3]">
     <a href="/" >
      <Image
       src="/sLogo.png" 
          alt="Company Logo Left"
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28 "  
        height={500}
        width={500}
      />
      </a>
      <div className="text-center">
      <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold">
        शिक्षा महाकुंभ अभियान
        </h2>
        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold">
        Shiksha MahaKumbh Abhiyan 
        </h2>
      </div>
     
      <a href="https://dhe.org.in" target="_blank" rel="noopener noreferrer">
  <Image
   src="/DHELogo.png"
     alt="Company Logo Left"
     className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28 "  
    height={500}
    width={500}
  />
</a>
    </div>
  );
};

export default CompanyInfo;
