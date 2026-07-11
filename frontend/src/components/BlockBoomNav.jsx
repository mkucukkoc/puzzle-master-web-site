import React from 'react';
import { Link } from 'react-router-dom';

const BlockBoomMark = () => (
  <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-[#d7c8ff] bg-[#251b52] shadow-[0_10px_30px_rgba(77, 58, 163, 0.25)]">
    <div className="absolute left-1 top-1 h-3 w-3 rounded-sm bg-[#ff5252]" />
    <div className="absolute left-5 top-1 h-3 w-3 rounded-sm bg-[#ffb800]" />
    <div className="absolute left-1 top-5 h-3 w-3 rounded-sm bg-[#59d56b]" />
    <div className="absolute left-5 top-5 h-3 w-3 rounded-sm bg-[#4e7eff]" />
  </div>
);

const BlockBoomNav = ({ active }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#d8d2f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <BlockBoomMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-[#251b52]">Block Boom!</span>
            <span className="block text-[11px] text-[#7b6cb2] font-semibold">Puzzle Website</span>
          </div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <Link
            to="/"
            className={`transition-colors ${
              active === 'home' ? 'text-[#6a45d8]' : 'text-[#7b6cb2] hover:text-[#251b52]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/block-boom/privacy"
            className={`transition-colors ${
              active === 'privacy' ? 'text-[#6a45d8]' : 'text-[#7b6cb2] hover:text-[#251b52]'
            }`}
          >
            Privacy
          </Link>
          <Link
            to="/block-boom/terms"
            className={`transition-colors ${
              active === 'terms' ? 'text-[#6a45d8]' : 'text-[#7b6cb2] hover:text-[#251b52]'
            }`}
          >
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BlockBoomNav;
