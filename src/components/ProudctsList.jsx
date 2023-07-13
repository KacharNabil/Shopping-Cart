import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useContext } from 'react'
import { useCartDispatch,useCartProducts} from '../CartContext'




export default function ProudctsList({product}) {
  const CartDispath=useCartDispatch();
  const cartProducts=useCartProducts();
  const [added ,setAdded]=useState(false)
  
  const isAdded=(product)=>{
    const res=cartProducts.filter(element => element.product.id===product.id);
    return res.length==1
  }

  

  const addHandler= ()=>{
    CartDispath({product:product,type:'add'})
    setAdded(true)

  }

  useLayoutEffect(() => {
    setAdded(isAdded(product))
  
    
  }, [])
  
  
  return (
    

    <>
        
            <div className='p-5 shadow-2xl rounded-xl text-xl text-center'>
                <img src={product.img} className='object-contain w-40 h-40 rounded-xl p-2 mx-auto' alt="" />
                <h3 className='font-medium p-2'>{product.name}</h3>
                <p className=' text-gray-700 p-2'>{product.desc}</p>
                <p className='font-medium text-center p-2'>{product.price} $</p>
                {added ? <p className='text-green-700 p-1 px-4 rounded-full my-2'>The Item is added</p> 
                :<button className='bg-gray-700 p-1 px-4 rounded-full my-2 text-white' onClick={addHandler} >Add To cart</button>}
                
                
            </div>

       
        
    </>
  )
}

