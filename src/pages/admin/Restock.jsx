import React, { useState } from 'react'
import { fakeProducts } from '../../data/fakeProducts'

const Restock = () => {


  const [products ,setProducts] =useState(fakeProducts);

  cosnt [selectedProductId, setSelectedProductId] = useState("")
  const [quantity, setQuantity] = useState();


;

  return (
    <div>
      
    </div>
  )
}

export default Restock
