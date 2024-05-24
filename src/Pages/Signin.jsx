import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Signin() {
  document.getElementById('root').setAttribute('class', 'h-dvh min-h-dvh flex flex-col justify-center items-center bg-neutral-100');
  return (
    <main className="w-full flex flex-col items-center gap-5">
      <form action="" className="w-3/5 p-3 flex flex-col items-center gap-2 bg-neutral-50 shadow-md shadow-neutral-200 border border-neutral-200 rounded">
        <img src="/app-icon.svg" alt="App Logo" className="size-16" />
        <h2 className="text-xl font-medium">Sign in as Admin</h2>
        <hr />
        <p className="w-full p-2 bg-red-600 text-white text-center font-medium rounded">Akun tidak ditemukan</p>
        <hr />
        <input type="text" placeholder="Username" className="w-full p-2 bg-neutral-200 focus:outline-green-600 rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 bg-neutral-200 focus:outline-green-600 rounded" />
        <hr />
        <button type="submit" className="w-full p-2 bg-green-600 text-white font-medium rounded">
          Masuk
        </button>
        <hr />
        <button type="button">Lupa Password?</button>
      </form>
      <MoonIcon className="size-10 text-neutral-300" />
      <SunIcon className="size-10 text-neutral-300" />
    </main>
  );
}
