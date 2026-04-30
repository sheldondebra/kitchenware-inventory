import React from 'react'
import { salesReports } from '../../data/fakeSales';

const Reports = () => {
  const salesToday = salesReports
  .filter((sale)=>sale.date === "2026-04-30")
  .reduce((sum,sale)=>sum + sale.total, 0)

  const totalProfit = salesReports.reduce((sum, sale)=> sum + sale.total,0)

  const salesThisWeek = salesReports.reduce((sum, sale)=> sum + sale.total, 0)

  const bestSellingProduct = 'Knife Set'

  return (
    <div>
      <h1 className="text-2xl fint-bold mb-6 mt-2 border-b  border-gray-200/80 pb-2">
        Reports
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl border  border-gray-300 shadow-sm">
          <p className="text-sm text-red-500 mb-2">Sales Today</p>
          <h2 className="text-2xl">GHS {salesToday}</h2>
        </div>
        <div className="bg-white p-5 rounded-2xl border  border-gray-300 shadow-sm">
          <p className="text-sm text-red-500 mb-2">Sales This Week</p>
          <h2 className="text-2xl">GHS {salesThisWeek}</h2>
        </div>
        <div className="bg-white p-5 rounded-2xl border  border-gray-300 shadow-sm">
          <p className="text-sm text-red-500 mb-2">Total Profit</p>
          <h2 className="text-2xl">GHS {salesToday}</h2>
        </div>
        <div className="bg-white p-5 rounded-2xl border  border-gray-300 shadow-sm">
          <p className="text-sm text-red-500 mb-2">Best Selling Product</p>
          <h2 className="text-2xl">{bestSellingProduct}</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-400 shadow-sm p-5 ">
        <h2 className="text-lg font-semibold mb-4 ">Sales Report Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-lef border-b bg-gray-50">
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Product</th>
                <th className="py-3 px-3">Quantity</th>
                <th className="py-3 px-3">Total</th>
                <th className="py-3 px-3">Profit</th>
              </tr>
            </thead>
            <tbody>
              {salesReports.map((sale) => (
                <tr key={sale.id} className="border-b border-gray-400">
                  <td className="py-3 px-3">{sale.date}</td>
                  <td className="py-3 px-3">{sale.product}</td>
                  <td className="py-3 px-3">{sale.qty}</td>
                  <td className="py-3 px-3">{sale.total}</td>
                  <td className="py-3 px-3">{sale.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports
