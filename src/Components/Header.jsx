import React, { useEffect } from 'react';
import {
  Form,
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from 'react-router-dom';
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';
import Navigation from './Navigation';
import FloatingWhatsappButton from './FloatingWhatsappButton';

export default function Header() {
  const className = 'w-full sticky top-0 p-3 flex flex-row justify-between items-center gap-3 bg-green-600 text-white shadow-md rounded-b-md';
  const [navBar, setNavBar] = React.useState(false);
  const path = useLocation().pathname;
  const { query } = useLoaderData();
  const navigate = useNavigate();
  const searchSubmit = useSubmit();

  useEffect(() => {
    if (path === '/') {
      document.getElementById('search-input').value = query;
    }
  }, [query]);

  // GALLERY
  if (path === '/') {
    return (
      <header className={className}>
        {/* SEARCH BAR */}
        <Form name="search-form" role="search" className="flex-1 px-5 py-2 flex flex-row justify-between items-center gap-3 bg-green-500 rounded-full">
          <MagnifyingGlassIcon className="size-7 bg-inherit text-green-200" />
          <input
            id="search-input"
            name="search"
            type="text"
            placeholder="Cari Tanaman..."
            defaultValue={query}
            autoComplete="off"
            onChange={(event) => {
              const isFirstType = query == null;
              searchSubmit(event.currentTarget.form, { replace: !isFirstType });
            }}
            className="flex-1 bg-inherit text-lg text-green-200 placeholder-green-200 font-medium focus:outline-0"
          />
          {
            query && (
            <XMarkIcon
              onClick={() => { searchSubmit(''); }}
              className="size-7 bg-inherit text-green-200"
            />
            )
          }
        </Form>
        <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
        {navBar && <Navigation setNavBar={setNavBar} />}
        <FloatingWhatsappButton />
      </header>
    );
  }

  // PLANT DETAIL
  if (path.includes('/plant/')) {
    return (
      <header className={`${className} py-4`}>
        <ArrowLeftIcon className="size-8 cursor-pointer" onClick={() => { navigate(-1); }} />
        <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
        {navBar && <Navigation setNavBar={setNavBar} />}
      </header>
    );
  }

  // ABOUT
  if (path === '/about') {
    return (
      <header className={`${className} py-4`}>
        <ArrowLeftIcon className="size-8 cursor-pointer" />
        <img src="/app-icon-white.svg" alt="" className="size-11 cursor-pointer" />
        <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
        {navBar && <Navigation setNavBar={setNavBar} />}
      </header>
    );
  }

  return (
    <header className={`${className} py-4`}>
      <img src="/app-icon-white.svg" alt="" className="size-11 cursor-pointer" />
      <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
      {navBar && <Navigation setNavBar={setNavBar} />}
      <FloatingWhatsappButton />
    </header>
  );
}
