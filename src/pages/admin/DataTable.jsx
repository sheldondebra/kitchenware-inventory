import React from 'react'
import { fakeProducts } from '../../data/fakeProducts'

const DataTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
      <h2>Recent Sales</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left">
            <tr className="border-b "></tr>
            <th>Product</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Total</th>
            <th className="py-2">Profit</th>
          </thead>
          <tbody className="">
            {fakeProducts.map((item) => (
              <tr key={item.id} className=" border-b border-gray-200 ">
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.costPrice}</td>
                <td>{item.lowStockLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable
