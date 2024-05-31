import React from 'react';
import {
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

export default function Navigation({ setNavBar }) {
  const navItemStyle = 'py-3 px-3 text-white text-2xl font-medium cursor-pointer';
  return (
    <nav className="z-10 h-dvh w-full fixed top-0 left-0 flex flex-row">
      <menu className="h-full w-full px-3 flex flex-col justify-center items-center bg-green-600 rounded-l-md">
        <XMarkIcon className="size-8 cursor-pointer self-center" onClick={() => { setNavBar(false); }} />
        <br />
        <img src="/app-icon-white.svg" alt="" className="size-20 cursor-pointer self-center" />
        <br />
        <li className={navItemStyle}>
          Galeri
        </li>
        <li className={navItemStyle}>
          Blog
        </li>
        <li className={navItemStyle}>
          Tentang Kami
        </li>
        {/*
        <li className={navItemStyle}>
          Pengaturan Admin
        </li>
        <li className={navItemStyle}>
          Keluar
        </li>
        */}
        <br />
        { true ? (
          <MoonIcon className="text-white text-center size-9 self-center" />
        ) : (
          <SunIcon className="text-white text-center size-9 self-center" />
        )}
        
        
      </menu>
    </nav>
  );
}
