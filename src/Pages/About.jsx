import React, { useState } from 'react';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import Header from '../Components/Header';

const shop = {
  name: 'Toko Tumbuh Jaya',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda repudiandae natus delectus, placeat earum dicta incidunt cum illum magnam impedit veniam blanditiis reprehenderit facilis praesentium quam, consequuntur aperiam nulla.',
  imageUrl: '',
};

export default function About() {
  document.getElementById('root').setAttribute('class', 'h-dvh flex flex-col justify-start items-stretch');
  const cardStyle = 'p-3 flex shadow-md rounded';
  return (
    <>
      <Header route="About" />
      <main className="w-full p-3 flex flex-col items-stretch gap-3">
        {/* TITLE */}
        <div className={`${cardStyle} bg-neutral-50 flex-row justify-center items-center gap-3`}>
          <p className="leading-none text-center text-3xl font-medium">{shop.name}</p>
        </div>
        {/* PHOTO */}
        <div className={`${cardStyle} h-1/2 p-0 bg-neutral-50 flex-col justify-between gap-3`}>
          {shop.imageUrl ? (
            <img src={shop.imageUrl} alt={shop.name} className="h-full object-cover object-center rounded-sm" />
          ) : (
            <div className="p-20 flex flex-col justify-center items-center">
              <BuildingStorefrontIcon className="size-32 text-neutral-200" />
            </div>
          )}
        </div>
        {/* DETAIL */}
        <div className={`${cardStyle} p-3 bg-neutral-50 flex-col justify-center items-stretch gap-3`}>
          <p className="text-center">{shop.desc}</p>
        </div>
        {/* LINKS */}
        <a href="whatsapp.com" className={`${cardStyle} px-5 bg-[#42b549] text-white flex-row justify-center items-center gap-3 cursor-pointer`}>
          <img src="/whatsapp-icon.svg" alt="Hubungi via Whatsapp" className="h-8" />
          <p className="leading-none text-xl font-medium">Hubungi toko via Whatsapp</p>
        </a>
        <a href="shopee.co.id" className={`${cardStyle} px-5 bg-[#ee4d2d] text-white flex-row justify-center items-center gap-3 cursor-pointer`}>
          <p className="leading-none text-xl font-medium">Kunjungi toko di</p>
          <img src="/Shopee.svg" alt="Kunjungi toko daring di Shopee" className="h-8" />
        </a>
      </main>
    </>
  );
}
