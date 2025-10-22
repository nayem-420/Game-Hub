import React from 'react';
import logo from '../assets/logo.png'
import { FaAsterisk } from 'react-icons/fa';

const Newsletter = () => {
    return (
      <div className="bg-[#003c5f] text-center p-5 my-6 rounded-lg shadow-xl">
        <div className='flex items-center justify-center w-full mx-auto'>
          <img src={logo} className="w-12 h-12 rounded-xl" alt="" />
        </div>
        <h1 className='text-5xl text-white font-semibold'>Connect With Us</h1>
        <p className='text-base-100 my-3'>
          Subscribe to Our Game Hub to get useful tutorials, webinars, use cases
          and step by step guides form industry experts.
        </p>
        <form>
          <label className='flex items-center justify-center gap-2 font-bold text-2xl text-white my-3'>
            Your Email <FaAsterisk />
          </label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <div>
            <button className="btn btn-wide text-white bg-red-700 my-3">Subscribe</button>
          </div>
        </form>
      </div>
    );
};

export default Newsletter;