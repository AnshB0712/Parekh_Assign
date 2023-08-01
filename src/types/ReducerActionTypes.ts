import { CartProduct } from './CartProduct';
import { Products } from './Products';

export enum ActionType {
    AddItemToCart = 'ADD_ITEM',
    RemoveItemToCart = 'REMOVE_ITEM'
}

export type AddItemToCart = {
    type: ActionType.AddItemToCart;
    payload: CartProduct;
};
export type RemoveItemToCart = {
    type: ActionType.RemoveItemToCart;
    payload: CartProduct;
};

export type ReducerActions = AddItemToCart | RemoveItemToCart;