import React from "react";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 border-b border-black'>
      <div className='navbar-center mx-auto text-center'>
        <h1 className='font-Montserrat text-xl font-bold'>GITTY</h1>
        <br />
        {/* <p className='text-xs'>
        (an app for beginners to open-source contributions)
      </p> */}
      </div>
      <div className='navbar-end mx-auto text-right'>
        <input
          type='checkbox'
          value='dark'
          className='toggle theme-controller bg-base-400 border-black'
        />
      </div>
    </div>
  );
};

export default Navbar;
