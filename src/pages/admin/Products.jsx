import React, { useState } from 'react'
import { fakeProducts } from '../../data/fakeProducts';
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";
import { X } from 'lucide-react';



const Products = () => {

  const [products, setProducts] = useState(fakeProducts)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    costPrice: "",
    sellingPrice: "",
    quantity: "",
    lowStockLevel:"",
  });

  const handleChange = (e) =>{
    const {name , value} = e.target;

    setFormData({
      ...formData,
      [name] : value,
    })
  }

  const handleAddProduct = (e) =>{
    e.preventDefault();

    const newProduct = {
      id:Date.now(),
      name: formData.name,
      constPrice: Number(formData.costPrice),
      sellingPrice: Number(formData.sellingPrice),
      quantity: Number (formData.quantity),
      lowStockLevel: Number(formData.lowStockLevel)
    }

    setProducts([...products, newProduct]);

    setFormData({
      name: "",
      costPrice: "",
      sellingPrice: "",
      quantity: "",
      lowStockLevel: "",
    });

    setShowForm(false)



  }






  return (
    <div>
      <div className="flex justify-between items-center mb-6  pb-2 mt-2 border-b border-gray-200">
        <h1 className="text-2xl">Produts</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors cursor-pointer "
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Products"}
        </button>
      </div>
      {showForm && (
        <form className="bg-white rounded-2xl border shadow-sm p-5 mb-6" onSubmit={handleAddProduct}>
          <div className="flex justify-between mb-4">
            <h1 className="font-semibold text-xl text-blue-700">Add Product</h1>
            <div>
              <X
                onClick={() => setShowForm(false)}
                className="text-red-700 bg-red-100  rounded-2xl p-1 hover:bg-red-700 hover:text-white cursor-pointer"
              />
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="block">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border  border-gray-200 rounded-xl px-4 py-2"
                placeholder="Cooking Pot"
                required
              />
            </div>
            <div>
              <label htmlFor="costprice">Cost Price</label>
              <input
                type="number"
                name="costPrice"
                value={formData.costPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="sellingprice">Selling Price</label>
              <input
                type="number"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="lowStock">LowStock level</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div className='md:col-span-2'>
              <button className='bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-800'> Save Product</button>
            </div>
          </div>
        </form>
      )}
      <div className="bg-white rounded-2xl border  border-gray-400 shadow-sm p-5">
        <h2 className="text-lg font-semibold">Product List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-gray-50 border-b">
                <th className="py-3 px-3">Name</th>
                <th className="py-3 px-3">Cost Price</th>
                <th className="py-3 px-3">Selling Price</th>
                <th className="py-3 px-3">Quantity</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="border-b border-gray-200" key={product.id}>
                  <td className="py-3 px-3">{product.name}</td>
                  <td className="py-3 px-3">{product.costPrice}</td>
                  <td className="py-3 px-3">{product.sellingPrice}</td>
                  <td className="py-3 px-3">{product.quantity}</td>
                  <td className="px-3 py-3">
                    {product.quantity >= product.lowStockLevel ? (
                      <span className="bg-red-100 text-red-600 px-3 py-1 text-xs rounded-full">
                        Low Stock
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                        In Stock
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-3 flex gap-3 text-xs">
                    <SquarePen
                      size={20}
                      className="rounded-lg p-1 bg-blue-100 text-blue-800 hover:bg-blue-400 hover:text-white cursor-pointer"
                    />
                    <Trash2
                      size={20}
                      className="rounded-lg p-1 bg-red-100 text-red-800 hover:bg-red-400 hover:text-white cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {products.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No Products available
          </p>
        )}
      </div>
    </div>
  );
}

export default Products
