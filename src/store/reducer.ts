import {Actions,
  ChangePlaceAction,
  ChangePriceAction,
  CreatePurchaseAction,
  DeletePurchaseAction,
  EditPurchaseAction,
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
  PUT_PURCHASES,
} from './types';

const initialState: IPurchase[] = [];

export const reducer = (state: IPurchase[] = initialState, action: Actions): IPurchase[] => {
  switch (action.type) {
    case CREATE_PURCHASE: {
      const {purchase} = (action as CreatePurchaseAction).payload;
      const newPurchaseList = [...state, purchase];
      return [...newPurchaseList];
    }
    case EDIT_PURCHASE: {
      const newPurchaseList = [...state];
      const {purchase} = (action as EditPurchaseAction).payload;
      const purchaseIndex = state.findIndex((item) => item.id === purchase.id);
      if (purchaseIndex !== -1) {
        newPurchaseList[purchaseIndex].isEdit = !newPurchaseList[purchaseIndex].isEdit;
        return [...newPurchaseList];
      }
      return state;
    }
    case DELETE_PURCHASE: {
      const {id} = (action as DeletePurchaseAction).payload;
      const newPurchaseList = state.filter((item) => item.id !== id);
      return [...newPurchaseList];
    }
    case CHANGE_PLACE: {
      const newPurchaseList = [...state];
      const {id, place} = (action as ChangePlaceAction).payload;
      const purchaseIndex = state.findIndex((item) => item.id === id);
      if (purchaseIndex !== -1 && place) {
        newPurchaseList[purchaseIndex].place = place;
        return [...newPurchaseList];
      }
      return state;
    }
    case CHANGE_PRICE: {
      const newPurchaseList = [...state];
      const {id, price} = (action as ChangePriceAction).payload;
      const purchaseIndex = state.findIndex((item) => item.id === id);
      if (purchaseIndex !== -1 && (price || price === 0)) {
        newPurchaseList[purchaseIndex].price = price;
        return [...newPurchaseList];
      }
      return state;
    }
    case GET_PURCHASES: {
      return state;
    }
    case PUT_PURCHASES: {
      const {purchases} = (action as PutPurchasesAction).payload;
      if (purchases) {
        const newPurchaseList = [...purchases];
        return [...newPurchaseList];
      }
      return state;
    }
    default:
      return state;
  }
};
