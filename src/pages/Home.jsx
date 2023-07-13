import React from 'react'

import Welcome from '../components/welcome'
import ProudctsList from '../components/ProudctsList'
import {Products} from '../constants/data'


function Homme() {

  return (
    <>
      <Welcome />
      <h1 className='text-center text-4xl font-bold'>Our Products</h1>
      <div className='flex justify-around flex-wrap p-10 gap-5 my-3'>
        {
          Products.map(
            (product)=>(<ProudctsList key={product.id} product={product} />)
          )
        }
      </div>
      
      
   </>
  )
}

export default Homme

