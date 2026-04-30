import React from 'react'
import { fakeProducts } from '../../data/fakeProducts'

const DataTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 overflow-hidden">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Sales</h2>
        <p className="text-sm text-gray-500">Latest product sales overview</p>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm border-collapse min-w-175">
          <thead className="">
            <tr className="border-b border-gray-200 bg-gray-50 text-left text-gray-600">
              <th>Product</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Total</th>
              <th className="py-2">Profit</th>
              <th className="py-2">Selling Price</th>
              <th className="py-2">Low Stock Level</th>
            </tr>
          </thead>
          <tbody className="">
            {fakeProducts.map((item) => (
              <tr
                key={item.id}
                className=" border-b border-gray-100 hover:bg-gray-50 transition "
              >
                <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{item.quantity}</td>
                <td className="px-4 py-3 text-gray-600">{item.costPrice}</td>
                <td className="px-4 py-3 text-gray-600">
                  {item.lowStockLevel}
                </td>
                <td className="px-4 py-3 text-gray-600">{item.sellingPrice}</td>
                <td className="px-4 py-3 text-gray-600">{item.lowStockLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable
