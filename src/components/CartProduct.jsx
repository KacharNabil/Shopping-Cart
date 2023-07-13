import React from 'react'
import { useCartDispatch } from '../CartContext'
import {AiFillDelete} from 'react-icons/ai'

export default function CartProduct({product,amount}) {
  
    const CartDispath=useCartDispatch();
    const handleMinus= () => {
        CartDispath({product:product,type:'-'})
    }
    const handlePlus= () => {
        CartDispath({product:product,type:'+'})
    }
    const handleDelete= () => {
        CartDispath({product:product,type:'delete'})
    }

    return (
        <>
            <div className='bg-gray-100 p-3 my-5 '>    
                
                <ul className=' flex justify-around items-center '>
                <img src={product.img} alt="fail to load" className='w-20 h-20 rounded-full' />
                    <div >
                    
                        <li className='font-medium text-lg'>{product.name}</li>
                        <li className='text-gray-600'>{product.desc}</li>
                    </div>
                        <div className='flex items-center'>
                            <button onClick={handleMinus} className='px-3 text-white bg-gray-800 rounded-full mx-4 font-bold'>-</button>
                            <p >{amount}</p>
                            <button onClick={handlePlus} className='px-3 text-white bg-gray-800 rounded-full mx-4 font-bold' >+</button>
                        </div>
                        
                    <li >{product.price*amount} $</li>
                    <button onClick={handleDelete} className=' text-red-500 text-2xl'><AiFillDelete/></button>
                    
                </ul>

            </div>
            
        </>
  )
}
