import React from "react";

const Sidebar = () => {
  return (
    <div className='font-RobotoMono drawer lg:drawer-open' id='sidebar'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content p-10 flex items-center justify-between'>
        {/* Page content here */}
        <h1 className='font-bold lg:hidden'>Git Repositories</h1>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary rounded-full drawer-button lg:hidden'
        >
          Filters
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <p className='text-lg font-bold'>Filters</p>
          <br />
          <li>
            <select className='select select-ghost w-full max-w-xs'>
              <option disabled selected>
                Programming Languages
              </option>
              <option>Svelte</option>
              <option>Vue</option>
              <option>React</option>
            </select>
          </li>
          {/* <br /> */}
          <li>
            <select className='select select-ghost w-full max-w-xs'>
              <option disabled selected>
                Issue Labels
              </option>
              <option>Svelte</option>
              <option>Vue</option>
              <option>React</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
