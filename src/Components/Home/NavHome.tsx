import React from 'react';

const NavHome: React.FC = () => {
  return (
    <header className="bg-[#98C1D9] p-1 shadow-md h-40">
      <nav className="flex justify-center items-center h-full">
        <ul className="flex p-1 items-center gap-x-6">
          <li><a href="#" className="font-black text-white font-mono text-5xl pr-100">Sawit</a></li>
          <li><a href="#" className="text-white text-3xl pr-30">Login</a></li>
          <li><a href="#" className="text-white text-3xl pr-30">Sign up</a></li>
          <li><a href="#" className="text-white text-3xl pr-30">About</a></li>
          <li><a href="#" className="text-white text-3xl pr-30">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHome;
