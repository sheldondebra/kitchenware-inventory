import React from 'react'
import StateCard from '../../components/StateCard'

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 '>
        <StateCard title="Total Sales" value="GHS 34,440" subtitle="Today" />
        <StateCard title="Total Profits" value="GHS 740" subtitle="Today" />
        <StateCard title="Low Stock Items" value="4" subtitle="Today" />
        <StateCard title="Total Products" value="23" subtitle="Today" />
      </div>
    </div>
  );
}

export default AdminDashboard
