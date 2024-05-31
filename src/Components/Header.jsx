import React from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Navigation from './Navigation';
import FloatingWhatsappButton from './FloatingWhatsappButton';

export default function Header({
  route,
  searchString,
  handleSearchForm
}) {
  const className = 'w-full sticky top-0 p-3 flex flex-row justify-between items-center gap-3 bg-green-600 text-white shadow-md rounded-b-md';
  const [navBar, setNavBar] = React.useState(false);

  switch (route) {
    case 'ProductDetail':
      return (
        <header className={className}>
          <ArrowLeftIcon className="size-8 cursor-pointer" />
          <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
          {navBar && <Navigation setNavBar={setNavBar} />}
        </header>
      );
    case 'Gallery':
      return (
        <header className={className}>
          {/* SEARCH BAR */}
          <form name="search-form" className="flex-1 px-5 py-2 flex flex-row items-center gap-3 bg-green-500 rounded-full">
            <MagnifyingGlassIcon className="size-7 bg-inherit text-green-200" />
            <input
              type="text"
              placeholder="Cari Tanaman..."
              value={searchString}
              onChange={(e) => { handleSearchForm(e.target.value); }}
              className="w-full bg-inherit text-lg placeholder-green-200 font-medium focus:outline-0"
            />
            {
              searchString && (
              <XMarkIcon
                onClick={() => { handleSearchForm(''); }}
                className="size-7 bg-inherit text-green-200"
              />
              )
            }
          </form>
          <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
          {navBar && <Navigation setNavBar={setNavBar} />}
          <FloatingWhatsappButton />
        </header>
      );
    case 'About':
      return (
        <header className={className}>
          <ArrowLeftIcon className="size-8 cursor-pointer" />
          <img src="/app-icon-white.svg" alt="" className="size-11 cursor-pointer" />
          <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
          {navBar && <Navigation setNavBar={setNavBar} />}
        </header>
      );
    default:
      return (
        <header className={className}>
          <img src="/app-icon-white.svg" alt="" className="size-11 cursor-pointer" />
          <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
          {navBar && <Navigation setNavBar={setNavBar} />}
          <FloatingWhatsappButton />
        </header>
      );
  }
}
