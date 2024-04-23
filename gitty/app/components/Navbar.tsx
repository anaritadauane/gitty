import React from "react";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 border-b'>
      <div className='navbar-center mx-auto text-start'>
        <div>
          <h1 className='font-Montserrat text-xl font-bold'>GITTY</h1>
          {/* <p className='font-thin font-RobotoMono text-xs'>
            (an app for beginners to open-source)
          </p> */}
        </div>
      </div>
      <div className='navbar-end mx-auto text-right'>
        <input
          type='checkbox'
          value='light'
          className='toggle theme-controller bg-base-400'
        />
      </div>
    </div>
  );
};

export default Navbar;
