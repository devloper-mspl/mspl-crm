import React, { useState } from 'react';
import "../index.css";
import { PhoneCall, Mail, ChevronDown, ChevronUp, Menu as MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <nav className="bg-[#f7f7f7] p-3 flex flex-row justify-between items-center md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
     <div className="flex justify-between items-center">
        <Link to="/Home"><img src="/logo.webp" alt="Sample" className="h-[40px] object-cover" /></Link>
     </div>
    <ul className="list-none flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
    <li><a href="mailto:contact@mishtel.com" className="flex items-center gap-2 text-[#065995] no-underline text-sm md:text-base"><Mail className="text-[#065995] w-5 h-5" />contact@mishtel.com</a>
    </li>
    <li><a href="tel:+919066667575" className="flex items-center gap-2 text-[#065995] no-underline text-sm md:text-base"><PhoneCall className="text-[#065995] w-5 h-5" />+91-9066667575</a>
    </li>
  </ul>
</nav>

      <nav className="bg-[#065995] p-3 flex justify-between items-center relative">
        <h1 className="text-white"><a href="/">Mishtel Services Pvt. Ltd.</a></h1>
        <ul className="hidden md:flex list-none gap-[20px] m-0">
          <li><Link to="/Home" className="text-white no-underline">Home</Link></li>
          <li><Link to="/About" className="text-white no-underline">About</Link></li>
          <li><Link to="/" className="text-white no-underline">Platforms</Link></li>
          <li className="relative">
            <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-1 text-white">
              <span>Services</span>
              {dropdown ? (
                <ChevronUp className="text-[#f0f2f4] w-5 h-5" />
              ) : (
                <ChevronDown className="text-[#f0f2f4] w-5 h-5" />
              )}
            </button>
            {dropdown && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded w-40 p-2 space-y-2">
                <li><Link to="/sms" className="block hover:bg-gray-200 p-2 rounded">SMS</Link></li>
                <li><Link to="/voice" className="block hover:bg-gray-200 p-2 rounded">Voice</Link></li>
                <li><Link to="/platforms" className="block hover:bg-gray-200 p-2 rounded">Platforms</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/" className="text-white no-underline">Partner Ship</Link></li>
          <li><Link to="/" className="text-white no-underline">Blog</Link></li>
          <li><Link to="/Contact" className="text-white no-underline">Contact</Link></li>
        </ul>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
        {open && (
          <ul className="absolute top-[60px] left-0 w-full bg-[#065995] flex flex-col gap-4 p-4 md:hidden">
            <li><Link to="/Home" className="text-white no-underline">Home</Link></li>
            <li><Link to="/About" className="text-white no-underline">About</Link></li>
            <li>
              <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-2 text-white w-full">
                <span>Services</span>
                {dropdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {dropdown && (
                <ul className="pl-4 space-y-2">
                  <li><Link to="/sms" className="block text-white">SMS</Link></li>
                  <li><Link to="/voice" className="block text-white">Voice</Link></li>
                  <li><Link to="/platforms" className="block text-white">Platforms</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="#" className="text-white no-underline">Platforms</Link></li>
            <li><Link to="#" className="text-white no-underline">Partner Ship</Link></li>
            <li><Link to="#" className="text-white no-underline">Blog</Link></li>
            <li><Link to="/Contact" className="text-white no-underline">Contact</Link></li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Menu;
