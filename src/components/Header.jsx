import React from "react";
import logo from "../assets/UnityFundX.png";
import { Link } from "react-router-dom";
import { LoginModal } from "./LoginModal";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <header className="shadow">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <a href="#" className="flex items-center space-x-2 font-black">
          <img src={logo} alt="UnityFundX logo" className="w-12 h-auto" />
          <div className="flex align-top">
            <span className="font-normal mr-2 text-blue-800">UnityFundX</span>
          </div>
        </a>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-7 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
          <span className="sr-only">Toggle Navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>

        <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 hover:pointer">
            <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link to="/">Home</Link></li>
            <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link to="/about">About us</Link></li>
            <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link to="/why-choose-us">Support</Link></li>
            <li className="text-gray-600 md:mr-12 hover:text-blue-600">
              <button className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white" onClick={handleOpen}>Login</button>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-blue-600">
              <button className="rounded-md border-2 border-blue-600 bg-blue-600 px-6 py-1 font-medium text-white transition-colors hover:bg-white hover:text-blue-600">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Add LoginModal here */}
      <LoginModal isOpen={open} handler={handleOpen} />
    </header>
  );
}
