
import React from "react";
import {  Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";
import Sidebar from "../../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 p-3">
          <Sidebar/>
      <main className="flex-1 p-6">
        <DashboardNav/>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
