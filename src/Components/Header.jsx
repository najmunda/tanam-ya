import React from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Navigation from './Navigation';
import FloatingWhatsappButton from './FloatingWhatsappButton';

export default function Header({
  route,
  isSearchActive,
  handleSearchButton,
  searchString,
  handleSearchForm
}) {
  const className = 'w-full sticky top-0 p-3 flex flex-row justify-between items-center gap-3 bg-green-600 text-white shadow-md rounded-b-md';
  const [navBar, setNavBar] = React.useState(false);

  switch (route) {
    case 'ProductDetail':
      return (
        <header className={className}>
          <ArrowLeftIcon className="size-9 cursor-pointer" />
          <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
          {navBar && <Navigation setNavBar={setNavBar} />}
          <FloatingWhatsappButton />
        </header>
      );
    case 'Gallery':
      return (
        <header className={className}>
          {isSearchActive ? (
            // SEARCH BAR
            <form name="search-form" className="flex-1 px-5 py-2 flex flex-row items-center gap-3 bg-green-500 rounded-full">
              <MagnifyingGlassIcon className="size-7 bg-inherit text-green-200" />
              <input
                type="text"
                placeholder="Search Plant..."
                value={searchString}
                onChange={(e) => { handleSearchForm(e.target.value); }}
                className="w-full bg-inherit text-lg placeholder-green-200 font-medium focus:outline-0"
              />
              <XMarkIcon
                onClick={() => { if (searchString.length === 0) { handleSearchButton(); } else { handleSearchForm(''); } }}
                className="size-7 bg-inherit text-green-200"
              />
            </form>
          ) : (
            // HEADER
            <>
              <MagnifyingGlassIcon
                className="size-9 cursor-pointer"
                onClick={handleSearchButton}
              />
              <img src="/app-icon-white.svg" alt="" className="size-11 cursor-pointer" />
            </>
          )}
          <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
          {navBar && <Navigation setNavBar={setNavBar} />}
          <FloatingWhatsappButton />
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
