import React from 'react';
import {
  XMarkIcon,
  PhotoIcon,
  NewspaperIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

export default function Navigation({ setNavBar }) {
  const navItemStyle = 'py-3 flex flex-row items-center gap-3 text-white text-xl font-medium cursor-pointer';
  const navIconStyle = 'size-8';
  return (
    <nav className="z-10 h-dvh w-full fixed top-0 left-0 backdrop-blur">
      <menu className="h-full w-4/6 px-3 flex flex-col justify-center items-stretch bg-green-600 rounded-r-md">
        <XMarkIcon className="size-8 cursor-pointer self-center" onClick={() => { setNavBar(false); }} />
        <br />
        <img src="/app-icon-white.svg" alt="" className="size-20 cursor-pointer self-center" />
        <h2 className="text-white text-center text-2xl font-bold">tanam-ya</h2>
        <br />
        <li className={navItemStyle}>
          <PhotoIcon className={navIconStyle} />
          Galeri
        </li>
        <li className={navItemStyle}>
          <NewspaperIcon className={navIconStyle} />
          Blog
        </li>
        <li className={navItemStyle}>
          <BuildingStorefrontIcon className={navIconStyle} />
          Tentang Kami
        </li>
        <li className={navItemStyle}>
          <Cog6ToothIcon className={navIconStyle} />
          Pengaturan Admin
        </li>
        <li className={navItemStyle}>
          <ArrowLeftStartOnRectangleIcon className={navIconStyle} />
          Keluar
        </li>
        <br />
        <MoonIcon className="text-green-700 text-center size-7 self-center" />
        <SunIcon className="text-green-700 text-center size-9 self-center" />
      </menu>
    </nav>
  );
}
