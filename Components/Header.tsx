'use client'; // Add this if using the new App Router and you need a client component

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'

const Header = () => {
  const router = useRouter(); // Use the hook from 'next/navigation'

  const handleClick = () => {
    router.push('/About'); // Navigate programmatically
  };

  return (
    <div className='header'>
      <button onClick={handleClick}><h1><i>Dev Blog</i></h1></button>
      <Link href="/About" className='link'>About</Link>
      <Link href="/Courses" className='link'>Courses</Link>
      <Link href="/Product" className='link'>Product</Link>
    </div>
  );
};

export default Header;
