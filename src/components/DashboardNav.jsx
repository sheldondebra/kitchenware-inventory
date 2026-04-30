import { ArrowDown, Bell, Search } from 'lucide-react';
import React from 'react'

const DashboardNav = () => {
  return (
    <section className="flex justify-between">
      <div>
        <div>
          <h1 className='text-2xl font-bold'>Hello Sheldon 👋🏾</h1>
          <p className='text-gray-400'>Good Morning</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex gap-3 border border-gray-200 px-2 py-2 rounded-xl">
          <Search />
          <input type="text" placeholder="Search" className='outline-none' />
        </div>
        <div className="bg-gray-200 p-3 rounded-xl">
          <Bell />
        </div>
        <div className='border flex rounded-lg border-gray-300 items-center px-4 py-1 gap-3'>
          <img src="https://i.pravatar.cc/41" alt="users" className='rounded-md h-10 w-10' />
          <div className='space-y-1'>
            <h1 className='font-bold'>Sheldon Debra</h1>
            <p className='text-sm text-gray-500'>Store Manager</p>
          </div>
          <ArrowDown/>
        </div>
      </div>
    </section>
  );
}

export default DashboardNav
