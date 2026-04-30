import React from 'react'

const StateCard = ({title, value, subtitle}) => {
  return (
    <section className='bg-white p-5 rounded-2xl shadow-sm border border-gray-300'>
      <p className='text-sm  mb-3 text-teal-500 font-semibold '>{title}</p>
      <h2 className='text-2xl font-bold -mt-2 '>{value}</h2>
      {subtitle && <p className='text-sm text-red-400 mt-1'>{subtitle}</p>}

    </section>
  )
}

export default StateCard
