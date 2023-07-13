import React from 'react'
import { useCartProducts, useCartDispatch, } from '../CartContext'
import CartProduct from '../components/CartProduct';

const shippingByArticl=2;

export default function Cart() {
  const cartProducts = useCartProducts()
  const CartDispath = useCartDispatch();
  const color = cartProducts.length ? ('mx-12 text-white p-2 px-5 bg-red-500 rounded-lg font-medium shadow-lg') :
  ('mx-12 text-white p-2 px-5 bg-green-500 rounded-lg font-medium shadow-lg')
  const handelClear=()=>{
    CartDispath({type:'clear'})
  }
  
  const subTotal=()=>{
    if(cartProducts.length==0)
     return 0
    let sum=0;
    cartProducts.forEach(element => {
      sum+=element.product.price*element.amount
    });
    return sum
  }

  const shippingCount =()=>{
    if(cartProducts.length==0)return 0
    let sum=0;
    cartProducts.forEach(element => {
      sum+=element.amount

    });
    return sum
  }
  const total=()=>{
    return subTotal() + shippingCount()*shippingByArticl
  }

  return (
    <div className='w-[100%]'>
      <div className='text-center'>
        <h1 className='text-xl font-bold m-4'>YOUR CART</h1>
        <h2 className='text-gray-600 font-medium mb-10'>You have {cartProducts.length} products in your cart</h2>
      </div>
      <div className='flex justify-end'>
        <button disabled={cartProducts.length===0} className={color} onClick={handelClear}>{cartProducts.length===0 ? ("Your cart is empty") : ("Clear your cart")}</button>
      </div>
      {cartProducts.map((cartProduct) => (<CartProduct key={cartProduct.product.id} product={cartProduct.product} amount={cartProduct.amount} />))}
      {cartProducts.length!==0 &&
        <div className='sticky bottom-0 bg-gray-100 w-screen shadow-lg '>
          <div className='w-[50%] mx-auto px-10 py-2 leading-8 font-medium  '>
            <div>
              <div className='flex justify-between '>
                <div>Subtotal :</div>
                <div> {subTotal()} $</div>
              </div>
              <div className='flex justify-between'>
                <div>Shipping fee :</div>
                <div className='right-0'>2 $ * {shippingCount()} </div>
                <div>{2*shippingCount()} $</div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div>Total :</div>
              <div> {total()} $</div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}
