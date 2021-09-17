import {Actions,
  ChangePlaceAction,
  ChangePriceAction,
  CreatePurchaseAction,
  DeletePurchaseAction,
  EditPurchaseAction,
  GetPurchasesResultAction,
  State
} from '../utils/interfaces';
import {
  CREATE_PURCHASE_FAIL,
  CREATE_PURCHASE_SUCCESS,
  EDIT_PURCHASE_SUCCESS,
  EDIT_PURCHASE_FAIL,
  DELETE_PURCHASE_SUCCESS,
  DELETE_PURCHASE_FAIL,
  GET_PURCHASES_SUCCESS,
  GET_PURCHASES_FAIL,
  CHANGE_PLACE,
  CHANGE_PRICE,
} from './types';

const initialState: State = {purchases : [], error: false};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case CREATE_PURCHASE_SUCCESS: {
      const {purchase} = (action as CreatePurchaseAction).payload;
      const newPurchaseList = [...state.purchases, purchase];
      return {
        purchases: [...newPurchaseList],
        error: false
      };
    }
    case CREATE_PURCHASE_FAIL: {
      const newPurchaseList = [...state.purchases];
      return {
        purchases: [...newPurchaseList],
        error: true
      };
    }
    case EDIT_PURCHASE_SUCCESS: {
      const newPurchaseList = [...state.purchases];
      const {purchase} = (action as EditPurchaseAction).payload;
      const purchaseIndex = state.purchases.findIndex((item) => item.id === purchase.id);
      if (purchaseIndex !== -1) {
        newPurchaseList[purchaseIndex].isEdit = !newPurchaseList[purchaseIndex].isEdit;
        return {
          purchases: [...newPurchaseList],
          error: false
        };
      }
      return state;
    }
    case EDIT_PURCHASE_FAIL: {
      const newPurchaseList = [...state.purchases];
      return {
        purchases: [...newPurchaseList],
        error: true
      };
    }
    case DELETE_PURCHASE_SUCCESS: {
      const {id} = (action as DeletePurchaseAction).payload;
      const newPurchaseList = state.purchases.filter((item) => item.id !== id);
      return {
        purchases: [...newPurchaseList],
        error: false
      };
    }
    case DELETE_PURCHASE_FAIL: {
      const newPurchaseList = [...state.purchases];
      return {
        purchases: [...newPurchaseList],
        error: true
      };
    }
    case GET_PURCHASES_SUCCESS: {
      const {purchases} = (action as GetPurchasesResultAction).payload;
      if (purchases) {
        const newPurchaseList = [...purchases];
        return {
          purchases: [...newPurchaseList],
          error: false
        };
      }
      return state;
    }
    case GET_PURCHASES_FAIL: {
      const newPurchaseList = [...state.purchases];
      return {
        purchases: [...newPurchaseList],
        error: true
      };
    }
    case CHANGE_PLACE: {
      const newPurchaseList = [...state.purchases];
      const {id, place} = (action as ChangePlaceAction).payload;
      const purchaseIndex = state.purchases.findIndex((item) => item.id === id);
      if (purchaseIndex !== -1 && place) {
        newPurchaseList[purchaseIndex].place = place;
        return {
          purchases: [...newPurchaseList],
          error: false
        };
      }
      return state;
    }
    case CHANGE_PRICE: {
      const newPurchaseList = [...state.purchases];
      const {id, price} = (action as ChangePriceAction).payload;
      const purchaseIndex = state.purchases.findIndex((item) => item.id === id);
      if (purchaseIndex !== -1 && (price || price === 0)) {
        newPurchaseList[purchaseIndex].price = price;
        return {
          purchases: [...newPurchaseList],
          error: false
        };
      }
      return state;
    }
    default:
      return state;
  }
};
