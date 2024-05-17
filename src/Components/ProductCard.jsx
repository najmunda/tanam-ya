import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const cardStyle = 'h-60 p-3 flex flex-col shadow-md rounded cursor-pointer';

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

export function ProductCard({ popName = '', scienceName = '', imageUrl = '' }) {
  return (
    <div className={`${cardStyle} justify-between gap-3 bg-neutral-50`}>
      {imageUrl ? (
        <img src={imageUrl} alt={popName} className="h-4/5 object-cover rounded-sm" />
      ) : (
        <div className="h-4/5 object-cover rounded-sm bg-neutral-300" />
      )}
      <div className="h-1/5 flex flex-col justify-between">
        {popName ? (
          <p className="leading-none text-lg font-medium">{popName}</p>
        ) : (
          <div className="w-full h-4 bg-neutral-300 rounded-lg" />
        )}
        {scienceName ? (
          <p className="leading-none font-light">{scienceName}</p>
        ) : (
          <div className="w-1/2 h-4 bg-neutral-300 rounded-lg" />
        )}
      </div>
    </div>
  );
}
