import React from "react";
import { IssueList } from "./IssueList";

const Sidebar = () => {
  return (
    <div role='tablist' className='tabs tabs-bordered'>
      <input
        type='radio'
        name='my_tabs_1'
        role='tab'
        className='tab bg-base-200'
        aria-label='Issues'
        checked
      />
      <div role='tabpanel' className='tab-content'>
        <div className='font-RobotoMono drawer lg:drawer-open' id='sidebar'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content p-10'>
            {/* Page content here */}
            <div className='flex justify-between'>
              <h1 className='font-bold text-lg self-center'>Issues</h1>
              <label
                htmlFor='my-drawer-2'
                className='btn btn-primary rounded-full drawer-button lg:hidden'
              >
                Filters
              </label>
            </div>
            <div className='grid'>
              <IssueList />
            </div>
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
                  <option value={""}>Programming Languages</option>
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
      </div>

      <input
        type='radio'
        name='my_tabs_1'
        role='tab'
        className='tab bg-base-200 rounded-r-lg'
        aria-label='Projects'
        checked
      />
      <div role='tabpanel' className='tab-content'>
        <div className='font-RobotoMono drawer lg:drawer-open' id='sidebar'>
          <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content p-10'>
            {/* Page content here */}
            <div className='flex justify-between'>
              <h1 className='font-bold text-lg self-center'>
                Git Repositories
              </h1>
              <label
                htmlFor='my-drawer-3'
                className='btn btn-primary rounded-full drawer-button lg:hidden'
              >
                Filters
              </label>
            </div>
            <div className='grid'>
              <IssueList />
            </div>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-3'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
              {/* Sidebar content here */}
              <p className='text-lg font-bold'>Filters</p>
              <br />
              <li>
                <select className='select select-ghost w-full max-w-xs'>
                  <option value={""}>Programming Languages</option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </li>
              {/* <br /> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
