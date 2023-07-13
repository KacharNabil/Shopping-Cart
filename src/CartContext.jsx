import React from 'react'
import { createContext, useContext, useReducer } from 'react';

const CartProductsContext = createContext(null);

const CartDispatchContext = createContext(null);

const CartLocalKey='CartProducts'

export function CartContext({ children }) {
  const [cartproducts, dispatch] = useReducer(
    cartProductReducer,
    readStorage()
  );

  return (
    <CartProductsContext.Provider value={cartproducts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartProductsContext.Provider>
  );
}

export function useCartProducts() {
  return useContext(CartProductsContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartProductReducer(CartProducts, action) {
  switch (action.type) {
    case 'add': {
      const res= [...CartProducts, {
        product: action.product,
        amount: 1
      }];
      localStorage.setItem(CartLocalKey,JSON.stringify(res))
      return res
    }
    case '+': {
      const res= CartProducts.map(cp => {
        if (cp.product.id === action.product.id) {
          return {...cp , amount: cp.amount+1};
        } else {
          return cp;
        }
      });
      localStorage.setItem(CartLocalKey,JSON.stringify(res))
      return res
    }
    case '-': {
      const res= CartProducts.map(cp => {
            if (cp.product.id === action.product.id) {
            return {...cp , amount: cp.amount-1};
            } else {
              return cp;
            }
          }).filter(cp => cp.amount !== 0);
      localStorage.setItem(CartLocalKey,JSON.stringify(res))
      return res
    }
    case 'delete': {
      const res= CartProducts.filter(cp => cp.product.id !== action.product.id);
      localStorage.setItem(CartLocalKey,JSON.stringify(res))
      return res
    }
    case 'clear': {
      localStorage.setItem(CartLocalKey,JSON.stringify([]))
      return []
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const readStorage=()=>{
  const res=localStorage.getItem(CartLocalKey)
  return res? JSON.parse(res) : []
}



