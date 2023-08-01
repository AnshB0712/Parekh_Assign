import React, { createContext, useReducer } from 'react';
import listOfProducts from '../constants/product.json'
import { productsReducer } from './productReducer';
import { Products } from '../types/Products';
import { ReducerActions } from '../types/ReducerActionTypes';
import { CartProduct } from '../types/CartProduct';

export const ProductsContext = createContext<{
    productsState: {
      products: { data: Products[] };
      cart: CartProduct[];
    };
    productsDispatch: React.Dispatch<ReducerActions>;
    }>({
  productsState: {
    products: { data: [] },
    cart: []
  },
  productsDispatch: () => undefined,
});

const ProductsContextProvider = ({ children }: {children: React.ReactElement}) => {
  const [productsState, productsDispatch] = useReducer(productsReducer,{
    products: listOfProducts ,
    cart: []
  });

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
