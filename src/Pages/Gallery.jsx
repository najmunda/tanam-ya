import React from 'react';
import Header from '../Components/Header';
import { AddProductCard, ProductCard } from '../Components/ProductCard';

const plants = [
  {
    id: 1,
    popName: 'Lidah Buaya',
    scienceName: 'Aloe Vera',
    imageUrl: '/plant/1.jpeg',
  },
];

export default function Gallery() {
  document.getElementById('root').setAttribute('class', 'h-full min-h-dvh flex flex-col justify-start items-stretch bg-green-100');
  const gridResponsive = `
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5
    xl:grid-cols-6
    2xl:grid-cols-7
  `;
  const flex = 'flex flex-row flex-wrap justify-center items-start';
  return (
    <>
      <Header />
      <main className={`w-full p-3 ${flex} gap-3`}>
        <AddProductCard />
        {plants.map((plant) => (
          <ProductCard
            key={plant.id}
            popName={plant.popName}
            scienceName={plant.scienceName}
            imageUrl={plant.imageUrl}
          />
        ))}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <AddProductCard />
      </main>
    </>
  );
}
