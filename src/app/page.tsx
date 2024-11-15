import React, { Suspense, lazy } from 'react';

// Dynamically import components
const Forms = lazy(() => import('./component/Forms'));
const CompanyInfo = lazy(() => import('./component/CompanyInfo'));
const Footer = lazy(() => import('./component/Footer'));

const Page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyInfo />
      </Suspense>
      <div className="w-full border-b-2 border-solid border-primary font-bold px-2 lg:px-4 bg-white">
        {/* Add content here if needed */}
      </div>
      <div className="flex bg-white">
        <div className='lg:w-1/3'>
          {/* Add content here if needed */}
        </div>
        <div className="w-full lg:w-1/3">
          <Suspense fallback={<div>Loading...</div>}>
            <Forms />
          </Suspense>
        </div>
        <div className='lg:w-1/3'>
          {/* Add content here if needed */}
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Page;
