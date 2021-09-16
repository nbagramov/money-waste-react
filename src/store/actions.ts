import {
  ChangePlaceAction,
  ChangePriceAction,
  CreatePurchaseAction,
  DeletePurchaseAction,
  EditPurchaseAction,
  GetPurchasesAction,
  PutPurchasesAction,
  IPurchase
} from '../utils/interfaces';
import {
  CREATE_PURCHASE,
  EDIT_PURCHASE,
  DELETE_PURCHASE,
  CHANGE_PLACE,
  CHANGE_PRICE,
  GET_PURCHASES,
  PUT_PURCHASES
} from './types';

export const createPurchase = (purchase: IPurchase): CreatePurchaseAction => {
  return {
    type: CREATE_PURCHASE,
    payload: {purchase},
  };
};

export const editPurchase = (purchase: IPurchase): EditPurchaseAction => {
  return {
    type: EDIT_PURCHASE,
    payload: {purchase},
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

export const getPurchases= (): GetPurchasesAction=> {
  return {
    type: GET_PURCHASES,
  };
};

export const putPurchases = (purchases: IPurchase[]): PutPurchasesAction=> {
  return {
    type: PUT_PURCHASES,
    payload: {purchases},
  };
};
