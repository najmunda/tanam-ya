import React from 'react';
import { Outlet } from 'react-router-dom';
import plantsData from '../data/plants';
import Header from '../Components/Header';

export function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('search') || '';
  const plants = plantsData.filter(
    (plant) => plant.popName.toLowerCase().includes(query.toLowerCase()),
  );
  return { plants, query };
}

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
