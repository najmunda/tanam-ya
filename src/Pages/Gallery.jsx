import React, { useState } from 'react';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';
import Header from '../Components/Header';
import { AddProductCard, ProductCard } from '../Components/ProductCard';

const plants = [
  {
    id: 1,
    popName: 'Lidah Buaya',
    scienceName: 'Aloe Vera',
    focus: 'leaf',
    imageUrl: '',
  },
  {
    id: 2,
    popName: 'Melati',
    scienceName: 'Jasminum',
    focus: 'flower',
    imageUrl: '',
  },
  {
    id: 3,
    popName: 'Mangga',
    scienceName: 'Mangifera indica',
    focus: 'fruit',
    imageUrl: '',
  },
  {
    id: 4,
    popName: 'Jambu Mete',
    scienceName: 'Anacardium occidentale',
    focus: 'fruit',
    imageUrl: '',
  },
];

export default function Gallery() {
  document.getElementById('root').setAttribute('class', 'h-dvh flex flex-col justify-start items-stretch');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchString, setSearchString] = useState('');

  const items = plants.filter(
    (plant) => plant.popName.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      <Header
        route="Gallery"
        isSearchActive={isSearchActive}
        handleSearchButton={() => { setIsSearchActive(!isSearchActive); }}
        searchString={searchString}
        handleSearchForm={(str) => { setSearchString(str); }}
      />
      {items.length !== 0 ? (
        <main className="w-full p-3 flex flex-row flex-wrap justify-center items-start gap-3">
          {items.map((plant) => (
            <ProductCard
              key={plant.id}
              popName={plant.popName}
              scienceName={plant.scienceName}
              focus={plant.focus}
              imageUrl={plant.imageUrl}
            />
          ))}
        </main>
      ) : (
        <main className="w-full h-full p-3 flex flex-col justify-center items-center gap-2">
          <ArchiveBoxXMarkIcon className="text-neutral-400 size-24" />
          <p className="text-xl text-wrap font-normal text-neutral-400">
            {isSearchActive && items.length !== 0 ? 'Tanaman tidak ditemukan :(' : 'Tanaman baru belum ditambahkan :('}
          </p>
        </main>
      )}
    </>
  );
}
