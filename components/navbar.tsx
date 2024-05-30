"use client";

import Link from "next/link";
import Button from "./button";
import Image from "next/image";

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          alt='logo'
          width={118}
          height={18}
          src='/logo.svg'
          className='object-contain'
        />
      </Link>

      <Button
        title='Sign in'
        btnType='button'
        containerStyles='text-white rounded-full bg-primary-teal min-w-[130px] hover:bg-green-600'
      />
    </nav>
  </header>
);

export default NavBar;
