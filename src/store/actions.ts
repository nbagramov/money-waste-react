import { Action, IPurchase } from '../utils/interfaces';
import {
  CREATE_PURCHASE,
  EDIT_PURCHASE,
  DELETE_PURCHASE,
  CHANGE_PLACE,
  CHANGE_PRICE
} from './types';

export const createPurchase = (purchase: IPurchase): Action => {
  return {
    type: CREATE_PURCHASE,
    purchase: purchase,
  };
};

export const editPurchase = (purchase: IPurchase): Action => {
  return {
    type: EDIT_PURCHASE,
    purchase: purchase,
  };
};

export const deletePurchase = (purchase: IPurchase): Action => {
  return {
    type: DELETE_PURCHASE,
    purchase: purchase,
  };
};

export const changePlace = (place: string, purchase: IPurchase): Action => {
  return {
    type: CHANGE_PLACE,
    purchase: purchase,
    place: place
  };
};

export const changePrice = (price: number, purchase: IPurchase): Action => {
  return {
    type: CHANGE_PRICE,
    purchase: purchase,
    price: price
  };
};