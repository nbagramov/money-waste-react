import {
  ChangePlaceAction,
  ChangePriceAction,
  CreatePurchaseAction,
  DeletePurchaseAction,
  EditPurchaseAction,
  IPurchase
} from '../utils/interfaces';
import {
  CREATE_PURCHASE,
  EDIT_PURCHASE,
  DELETE_PURCHASE,
  CHANGE_PLACE,
  CHANGE_PRICE
} from './types';

export const createPurchase = (purchase: IPurchase): CreatePurchaseAction => {
  return {
    type: CREATE_PURCHASE,
    payload: {purchase},
  };
};

export const editPurchase = (id: number): EditPurchaseAction => {
  return {
    type: EDIT_PURCHASE,
    payload: {id},
  };
};

export const deletePurchase = (id: number): DeletePurchaseAction => {
  return {
    type: DELETE_PURCHASE,
    payload: {id},
  };
};

export const changePlace = (place: string, id: number): ChangePlaceAction => {
  return {
    type: CHANGE_PLACE,
    payload: {id, place},
  };
};

export const changePrice = (price: number, id: number): ChangePriceAction => {
  return {
    type: CHANGE_PRICE,
    payload: {id, price},
  };
};
