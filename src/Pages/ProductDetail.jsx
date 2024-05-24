import React from 'react';
import Header from '../Components/Header';

const plant = {
  id: 1,
  popName: 'Lidah Buaya',
  scienceName: 'Aloe Vera',
  focus: 'leaf',
  imageUrl: '/plant/1.jpeg',
};

export default function ProductDetail() {
  document.getElementById('root').setAttribute('class', 'h-dvh flex flex-col justify-start items-stretch');
  const cardStyle = 'p-3 flex shadow-md rounded';
  return (
    <>
      <Header />
      <main className="w-full p-3 flex flex-col items-stretch gap-3">
        <div className={`${cardStyle} bg-neutral-50 flex-col justify-between gap-3`}>
          <img src={plant.imageUrl} alt={plant.popName} className="object-cover rounded-sm" />
        </div>
        <div className={`${cardStyle} px-5 bg-neutral-50 flex-row justify-between items-center gap-3`}>
          <div className="flex flex-wrap flex-row items-baseline gap-1">
            <p className="leading-none text-3xl font-medium">{plant.popName}</p>
            <p className="leading-none text-xl font-light">{`(${plant.scienceName})`}</p>
          </div>
          <img
            src={`/${plant.focus}-focus-plant-logo.svg`}
            alt="Leaf-focus-plant"
            className="size-12"
          />
        </div>
        <div className={`${cardStyle} px-5 bg-neutral-50`}>Plant Detail</div>
        <a href="shopee.co.id" className={`${cardStyle} px-5 bg-[#ee4d2d] text-white flex-row justify-center items-center gap-3 cursor-pointer`}>
          <p className="leading-none text-xl font-medium">Beli via</p>
          <img src="/Shopee.svg" alt="Beli tanaman ini via Shopee" className="h-10" />
        </a>
        <a href="tokopedia.co.id" className={`${cardStyle} px-5 bg-[#42b549] text-white flex-row justify-center items-center gap-3 cursor-pointer`}>
          <p className="leading-none text-xl font-medium">Beli via</p>
          <img src="/Tokopedia.svg" alt="Beli tanaman ini via Tokopedia" className="h-10" />
        </a>
      </main>
    </>
  );
}
