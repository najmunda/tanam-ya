import React from 'react';
import { MagnifyingGlassIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Navigation from './Navigation';
import FloatingWhatsappButton from './FloatingWhatsappButton';

export default function Header() {
  const className = 'w-full sticky top-0 p-3 flex flex-row justify-between items-center gap-3 bg-green-600 text-white shadow-md rounded-b-md';
  const [searchBar, setSearchBar] = React.useState(false);
  const [navBar, setNavBar] = React.useState(false);
  const [searchString, setSearchString] = React.useState('');

  return (
    <header className={className}>
      <Bars3Icon className="size-9 cursor-pointer" onClick={() => { setNavBar(true); }} />
      {navBar && <Navigation setNavBar={setNavBar} />}
      {searchBar ? (
        // SEARCH BAR
        <form name="search-form" className="flex-1 px-5 py-2 flex flex-row items-center gap-3 bg-green-500 rounded-full">
          <MagnifyingGlassIcon className="size-7 bg-inherit text-green-200" />
          <input
            type="text"
            placeholder="Search Plant..."
            value={searchString}
            onChange={(e) => { setSearchString(e.target.value); }}
            className="w-full bg-inherit text-lg placeholder-green-200 font-medium focus:outline-0"
          />
          <XMarkIcon
            onClick={() => { if (searchString.length === 0) { setSearchBar(false); } else { setSearchString(''); } }}
            className="size-7 bg-inherit text-green-200"
          />
        </form>
      ) : (
        // HEADER
        <>
          <img src="/app-icon-white.svg" alt="" className="size-11 cursor-pointer" />
          <MagnifyingGlassIcon
            className="size-9 cursor-pointer"
            onClick={() => { setSearchBar(true); }}
          />
        </>
      )}
      <FloatingWhatsappButton />
    </header>
  );
}
