import { LayoutDashboard, Moon, Sun } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-h-screen">
      <aside className="w-64 bg-blue-300/30 md:flex md:flex-col shadow rounded-xl p-5 hidden justify-between">
        <div>
          <div className="flex items-center gap-3 font-bold text-xl mb-8">
            <img src="/assets/logo.png" alt="logo" className="w-10 mb-5" />
            <h1 className="text-lg -mt-4 font-medium">KitchenWare Inventory</h1>
          </div>
          <nav className="space-y-3">
            <NavLink to="/admin" end className="flex gap-4">
              <LayoutDashboard />
              Dashboard
            </NavLink>
          </nav>
        </div>

        <div className="flex gap-3">
          <button className="bg-blue-500 px-3 py-2 rounded-xl text-white flex ">
            <Sun />
            Light
          </button>
          <button className="px-3 py-2 rounded-xl text-gray-700 flex">
            <Moon />
            Dark
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar
