"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navber = () => {
  const [icon, setIcon] = useState(true);
  const pathName = usePathname();

  return (
    <header className='h-20 flex flex-col justify-center items-center bg-light text-dark'>
      <nav className='wrapper flex items-center justify-around'>
        <h2>Hello</h2>
        <div className={icon ? "navber active" : "navber"}>
          <ul className='nav-lists'>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/'
                onClick={() => setIcon(false)}
                className={`${pathName === "/" ? "nav-active " : ""}`}
              >
                Home
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/about'
                onClick={() => setIcon(false)}
                className={`${pathName === "/about" ? "nav-active " : ""}`}
              >
                About
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/packages'
                onClick={() => setIcon(false)}
                className={`${pathName === "/packages" ? "nav-active " : ""}`}
              >
                Packages
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/contact'
                onClick={() => setIcon(false)}
                className={`${pathName === "/contact" ? "nav-active " : ""}`}
              >
                Contact
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/login'
                onClick={() => setIcon(false)}
                className={`${pathName === "/login" ? "nav-active " : ""}`}
              >
                login
              </Link>
            </li>
            <li className='relative '>
              <Link href='/cart' onClick={() => setIcon(false)} className=''>
                <FiShoppingCart className='text-xl max-md:text-2xl' />
                <span className='absolute -top-2 left-4 bg-orange rounded-full text-xs '>
                  10
                </span>
              </Link>
            </li>
          </ul>

          {/* mobile responsive */}
          <div className='mobile-navber-btn '>
            <CgMenu
              name='menu-outline'
              className='mobile-navber-icon text-4xl'
              onClick={() => setIcon(true)}
            />
            <CgClose
              name='close-outline'
              className='mobile-navber-icon close-outline'
              onClick={() => setIcon(false)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
