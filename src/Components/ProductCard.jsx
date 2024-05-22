import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const cardStyle = 'h-60 w-48 p-3 flex flex-col only:mr-auto shadow-md rounded cursor-pointer';

export function AddProductCard() {
  return (
    <div className={`${cardStyle} justify-center items-center gap-2 border-4 border-neutral-500 border-dashed text-neutral-500`}>
      <PlusCircleIcon className="size-16" />
      <p className="leading-none text-xl font-medium text-center">
        Tambah
        <br />
        Produk
      </p>
    </div>
  );
}

export function ProductCard({ popName = '', scienceName = '', focus = '', imageUrl = '' }) {
  return (
    <div className={`${cardStyle} justify-between gap-2 bg-neutral-50`}>
      {imageUrl ? (
        <img src={imageUrl} alt={popName} className="h-4/5 object-cover rounded-sm" />
      ) : (
        <div className="h-4/5 object-cover rounded-sm bg-neutral-300" />
      )}
      <div className="h-1/5 px-1 gap-3 flex flex-row justify-between items-center">
        <div className="h-full flex flex-col justify-center flex-1">
          {popName ? (
            <p className="leading-none text-base font-medium line-clamp-1">{popName}</p>
          ) : (
            <div className="w-full h-4 bg-neutral-300 rounded-lg" />
          )}
          {scienceName ? (
            <p className="text-sm font-light line-clamp-1">{scienceName}</p>
          ) : (
            <div className="w-1/2 h-4 bg-neutral-300 rounded-lg" />
          )}
        </div>
        {focus.length !== 0 && (
        <img
          src={`/${focus}-focus-plant-logo.svg`}
          alt="Leaf-focus-plant"
          className="size-8"
        />
        )}
      </div>
    </div>
  );
}
