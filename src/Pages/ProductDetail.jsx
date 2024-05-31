import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Header from '../Components/Header';

const plant = {
  id: 1,
  popName: 'Lidah Buaya',
  scienceName: 'Aloe Vera',
  focus: 'leaf',
  imageUrl: '',
};

export default function ProductDetail() {
  document.getElementById('root').setAttribute('class', 'h-dvh flex flex-col justify-start items-stretch');
  const cardStyle = 'p-3 flex shadow-md rounded';
  const [isDetailActive, setIsDetailActive] = useState(false);
  return (
    <>
      <Header route="ProductDetail" />
      <main className="w-full p-3 flex flex-col items-stretch gap-3">
        {/* PHOTO */}
        <div className={`${cardStyle} h-[calc(100vh * 0.5)] p-0 bg-neutral-50 flex-col justify-between gap-3`}>
          {plant.imageUrl ? (
            <img src={plant.imageUrl} alt={plant.popName} className="h-full object-cover object-center rounded-sm" />
          ) : (
            <div className="p-20 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-32 fill-neutral-200" viewBox="0 0 57.372 99.538"><path d="M112.766 56.064c-1.019 0-2.04.14-3.05.445-1.745.527-3.028 1.687-3.964 3.107-.93-1.375-2.193-2.496-3.898-3.01-.169-.052-.338-.098-.506-.14-5.236-1.296-10.695 1.706-14.724 5.734-4.158 4.159-7.222 9.842-5.594 15.229.527 1.745 1.687 3.029 3.107 3.964-1.375.93-2.495 2.193-3.01 3.899-.052.168-.098.338-.14.506-1.296 5.236 1.706 10.695 5.734 14.724 4.158 4.158 9.842 7.221 15.229 5.594a6.562 6.562 0 0 0 1.563-.713v4.28h-19.18c-3.94 0-7.186 3.245-7.186 7.186v2.076c0 3.94 3.245 7.186 7.186 7.186h.34l2.582 22.55c.411 3.591 3.22 6.921 7.17 6.921h22.815c3.95 0 6.76-3.33 7.17-6.921l2.582-22.55h.342c3.94 0 7.185-3.245 7.185-7.186v-2.076c0-3.94-3.245-7.186-7.185-7.186h-19.18v-4.433c.501.322 1.05.586 1.66.77.167.05.336.097.505.139 5.235 1.296 10.695-1.706 14.724-5.734 4.158-4.158 7.221-9.842 5.594-15.23-.527-1.745-1.688-3.028-3.107-3.964 1.375-.93 2.495-2.193 3.01-3.898.051-.169.098-.337.14-.506 1.295-5.236-1.706-10.695-5.734-14.724-3.379-3.379-7.764-6.034-12.18-6.039zm-.014 4.703c2.662.118 6.153 1.86 8.912 4.619 3.395 3.395 5.25 7.9 4.434 10.605-.257.847-1.133 1.626-2.979 2.266-.768.267-1.664.48-2.628.646-.243-.035-.682-.068-1.007-.099a13.796 13.796 0 0 0-3.826-7.316 13.796 13.796 0 0 0-7.425-3.845c-.032-.342-.064-.748-.1-.995.168-.998.384-1.925.66-2.717.64-1.846 1.419-2.723 2.267-2.98.507-.153 1.077-.212 1.692-.184zm-13.932.096c.614-.027 1.184.032 1.691.185.848.256 1.627 1.132 2.268 2.978.266.769.478 1.664.645 2.629-.035.242-.068.682-.099 1.006a13.796 13.796 0 0 0-7.317 3.827 13.794 13.794 0 0 0-3.844 7.424c-.343.032-.749.065-.996.101-.997-.168-1.925-.385-2.716-.66-1.846-.64-2.723-1.42-2.98-2.267-.816-2.704 1.039-7.208 4.434-10.604 2.759-2.758 6.25-4.5 8.914-4.619zm7.013 11.183c2.363 0 4.726.908 6.542 2.724a9.218 9.218 0 0 1 0 13.085 9.217 9.217 0 0 1-13.084 0 9.216 9.216 0 0 1 0-13.084 9.224 9.224 0 0 1 6.542-2.725zm14.664 11.566c.998.169 1.926.384 2.718.659 1.846.64 2.723 1.42 2.979 2.268.817 2.704-1.038 7.208-4.434 10.603-3.395 3.396-7.9 5.251-10.605 4.434-.848-.256-1.626-1.132-2.267-2.977-.266-.769-.479-1.665-.645-2.629.034-.242.068-.682.099-1.006a13.794 13.794 0 0 0 7.316-3.827 13.796 13.796 0 0 0 3.844-7.425c.343-.031.749-.064.995-.1zm-29.321.11c.242.035.682.068 1.006.099a13.797 13.797 0 0 0 3.827 7.315 13.798 13.798 0 0 0 7.425 3.845c.031.343.064.75.1.996-.169.998-.385 1.925-.66 2.717-.64 1.846-1.42 2.723-2.267 2.98-2.704.816-7.209-1.04-10.604-4.435-3.395-3.395-5.25-7.9-4.434-10.605.256-.848 1.132-1.626 2.978-2.267.769-.266 1.664-.478 2.629-.645zm-6.843 30.603h43c1.45 0 2.544 1.095 2.544 2.544v2.076c0 1.45-1.094 2.544-2.543 2.544H84.333c-1.45 0-2.544-1.094-2.544-2.544v-2.076c0-1.45 1.094-2.544 2.544-2.544zm5.013 11.806h32.974l-2.52 22.021c-.203 1.764-1.12 2.808-2.56 2.808H94.426c-1.44 0-2.357-1.044-2.559-2.808z" transform="translate(-77.147 -56.064)" /></svg>
            </div>
          )}
        </div>
        {/* TITLE */}
        <div className={`${cardStyle} bg-neutral-50 flex-row justify-between items-center gap-3`}>
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
        {/* LINKS */}
        <a href="whatsapp.com" className={`${cardStyle} px-5 bg-[#42b549] text-white flex-row justify-center items-center gap-3 cursor-pointer`}>
          <img src="/whatsapp-icon.svg" alt="Hubungi via Whatsapp" className="h-8" />
          <p className="leading-none text-xl font-medium">Hubungi via Whatsapp</p>
        </a>
        <a href="shopee.co.id" className={`${cardStyle} px-5 bg-[#ee4d2d] text-white flex-row justify-center items-center gap-3 cursor-pointer`}>
          <p className="leading-none text-xl font-medium">Beli via</p>
          <img src="/Shopee.svg" alt="Beli tanaman ini via Shopee" className="h-8" />
        </a>
        {/* DETAIL */}
        <div className={`${cardStyle} p-3 bg-neutral-50 flex-col justify-between items-stretch gap-3`}>
          <button type="button" className="flex flex-row justify-between items-center" onClick={() => { setIsDetailActive(!isDetailActive); }}>
            <h1 className="leading-none text-xl font-medium">Detail Tanaman</h1>
            {isDetailActive ? (
              <ChevronUpIcon className="size-8" />
            ) : (
              <ChevronDownIcon className="size-8" />
            )}
          </button>
          {isDetailActive && (
          <>
            <hr />
            <div className="flex-col justify-between items-stretch gap-1">
              <h2 className="text-lg font-medium">Bagian Utama</h2>
              <p className="leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, beatae.</p>
              <br />
              <h2 className="text-lg font-medium">Kebutuhan Air</h2>
              <p className="leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, beatae.</p>
              <br />
              <h2 className="text-lg font-medium">Jenis Akar</h2>
              <p className="leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, beatae.</p>
              <br />
              <h2 className="text-lg font-medium">Ukuran Tanaman</h2>
              <p className="leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, beatae.</p>
              <br />
              <h2 className="text-lg font-medium">Palet Warna</h2>
              <p className="leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, beatae.</p>
            </div>
          </>
          )}
        </div>
      </main>
    </>
  );
}
