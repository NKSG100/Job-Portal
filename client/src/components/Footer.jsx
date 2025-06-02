import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-gradient-to-r from-blue-900 to-gray-700 py-6 mt-20'>
      <div className='container px-4 2xl:px-20 mx-auto flex flex-col sm:flex-row items-center justify-center gap-4'>
        <img src={assets.logo} alt="Logo" className='w-24 h-auto mb-4 sm:mb-0' />
        <p className='text-sm text-white text-center'>
          Copyright © {currentYear} by Naman. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;