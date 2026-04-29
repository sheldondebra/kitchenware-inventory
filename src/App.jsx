import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Products from "./pages/admin/Products";
import Restock from "./pages/admin/Restock";
import Reports from "./pages/admin/Reports";
import SalesLayout from "./pages/sales/SalesLayout";
import SalesDashboard from "./pages/sales/SalesDashboard";

const App = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="restock" element={<Restock />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* Sales Routes */}
      <Route path="/sales" element={<SalesLayout />}>
        <Route index element={<SalesDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
