import { CartProduct } from '../types/CartProduct';
import { Products } from '../types/Products';
import { ActionType, ReducerActions } from '../types/ReducerActionTypes';

export const productsReducer = (state: {products: { data: Products[] };cart: CartProduct[]}, action: ReducerActions) => {

  console.log(action.type);

  if(action.type === ActionType.AddItemToCart){
    return ({
      products: {...state.products},
      cart: [...state.cart,{...action.payload}]
    });
  }

  if(action.type === ActionType.RemoveItemToCart){
    return ({
      products: {...state.products},
      cart: state.cart.filter(product => !(product.name === action.payload.name && product.price === action.payload.price && product.category 
        === action.payload.category))
    });
  }

  return state;
};
