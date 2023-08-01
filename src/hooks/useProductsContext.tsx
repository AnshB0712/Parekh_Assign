import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext'

export const useProductsContext = () => useContext(ProductsContext);
