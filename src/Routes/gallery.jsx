import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';
import { ProductCard } from '../Components/ProductCard';

export default function Gallery() {
  document.getElementById('root').setAttribute('class', 'h-dvh flex flex-col justify-start items-stretch');

  const { plants, query } = useLoaderData();
  const navigation = useNavigation();
  const isSearching = navigation.location && new URLSearchParams(navigation.location.search).has('search');

  return plants.length !== 0 ? (
    <main className="w-full p-3 flex flex-row flex-wrap justify-center items-start gap-3">
      {/*Add Spinner*/}
      {plants.map((plant) => (
        <Link to={`plant/${plant.id}`} key={plant.id}>
          <ProductCard
            popName={plant.popName}
            scienceName={plant.scienceName}
            focus={plant.focus}
            imageUrl={plant.imageUrl}
          />
        </Link>
      ))}
    </main>
  ) : (
    <main className="w-full h-full p-3 flex flex-col justify-center items-center gap-2">
      <ArchiveBoxXMarkIcon className="text-neutral-400 size-24" />
      <p className="text-xl text-wrap font-normal text-neutral-400">
        {query.length !== 0 ? 'Tanaman tidak ditemukan :(' : 'Tanaman baru belum ditambahkan :('}
      </p>
    </main>
  );
}
