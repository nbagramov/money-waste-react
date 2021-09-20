import {
  ChangePlaceAction,
  ChangePriceAction,
  CreatePurchaseAction,
  DeletePurchaseAction,
  EditPurchaseAction,
  GetPurchasesAction,
  GetPurchasesResultAction,
  IPurchase
} from '../utils/interfaces';
import {
  CREATE_PURCHASE,
  EDIT_PURCHASE,
  DELETE_PURCHASE,
  GET_PURCHASES,
  CREATE_PURCHASE_SUCCESS,
  CREATE_PURCHASE_FAIL,
  EDIT_PURCHASE_SUCCESS,
  EDIT_PURCHASE_FAIL,
  DELETE_PURCHASE_SUCCESS,
  DELETE_PURCHASE_FAIL,
  GET_PURCHASES_SUCCESS,
  GET_PURCHASES_FAIL,
  CHANGE_PRICE,
  CHANGE_PLACE
} from './types';

export const createPurchase = (purchase: IPurchase): CreatePurchaseAction => {
  return {
    type: CREATE_PURCHASE,
    payload: {purchase},
  };
};

export const createPurchaseSuccess = (purchase: IPurchase): CreatePurchaseAction => {
  return {
    type: CREATE_PURCHASE_SUCCESS,
    payload: {purchase},
  };
};

export const createPurchaseFail = (purchase: IPurchase): CreatePurchaseAction => {
  return {
    type: CREATE_PURCHASE_FAIL,
    payload: {purchase},
  };
};

export const editPurchase = (purchase: IPurchase): EditPurchaseAction => {
  return {
    type: EDIT_PURCHASE,
    payload: {purchase},
  };
};

export const editPurchaseSuccess = (purchase: IPurchase): EditPurchaseAction => {
  return {
    type: EDIT_PURCHASE_SUCCESS,
    payload: {purchase},
  };
};

export const editPurchaseFail = (purchase: IPurchase): EditPurchaseAction => {
  return {
    type: EDIT_PURCHASE_FAIL,
    payload: {purchase},
  };
};

export const deletePurchase = (id: number): DeletePurchaseAction => {
  return {
    type: DELETE_PURCHASE,
    payload: {id},
  };
};

export const deletePurchaseSuccess = (id: number): DeletePurchaseAction => {
  return {
    type: DELETE_PURCHASE_SUCCESS,
    payload: {id},
  };
};

export const deletePurchaseFail = (id: number): DeletePurchaseAction => {
  return {
    type: DELETE_PURCHASE_FAIL,
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

export const getPurchasesSuccess = (purchases: IPurchase[]): GetPurchasesResultAction=> {
  return {
    type: GET_PURCHASES_SUCCESS,
    payload: {purchases},
  };
};

export const getPurchasesFail = (): GetPurchasesAction=> {
  return {
    type: GET_PURCHASES_FAIL,
  };
};
