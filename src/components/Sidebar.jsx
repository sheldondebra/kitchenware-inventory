import { LayoutDashboard, Moon, Sun } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { BookSearch } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { Activity } from "lucide-react";
import { Settings } from "lucide-react";




const Sidebar = () => {
  return (
    <div className="min-h-screen">
      <aside className="w-64 bg-blue-300/30 md:flex md:flex-col shadow rounded-xl p-5 hidden justify-between h-screen">
        <div>
          <div className="flex items-center gap-3 font-bold text-xl mb-8">
            <img src="/assets/logo.png" alt="logo" className="w-10 mb-5" />
            <h1 className="text-lg -mt-4 font-medium">KitchenWare Inventory</h1>
          </div>
          <nav className="space-y-2">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 bg-blue-300 p-2 border-l-3 border-blue-800"
                  : "flex gap-3 hover:bg-blue-200 hover:p-2 p-2"
              }
            >
              <LayoutDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/reports"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 bg-blue-300 p-2 border-l-3 border-blue-800"
                  : "flex gap-3 hover:bg-blue-200 hover:p-2 p-2"
              }
            >
              <BookSearch />
              Reports
            </NavLink>
            <NavLink
              to="/admin/Products"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 bg-blue-300 p-2 border-l-3 border-blue-800"
                  : "flex gap-3 hover:bg-blue-200 hover:p-2 p-2"
              }
            >
              <ShoppingBasket />
              Products
            </NavLink>
            <NavLink
              to="/admin/restock"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 bg-blue-300 p-2 border-l-3 border-blue-800"
                  : "flex gap-3 hover:bg-blue-200 hover:p-2 p-2"
              }
            >
              <Activity />
              Restock
            </NavLink>
            <NavLink
              to="/admin/settings"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 bg-blue-300 p-2 border-l-3 border-blue-800"
                  : "flex gap-3 hover:bg-blue-200 hover:p-2 p-2"
              }
            >
              <Settings />
              Settings
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
