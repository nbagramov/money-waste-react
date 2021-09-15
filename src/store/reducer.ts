import {Actions,
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
  CHANGE_PRICE,
} from './types';

const initialState: IPurchase[] = [
  {
    id: 0,
    place: 'shop1',
    price: 10000,
    date: '03.04.20',
    isEdit: false,
  },
  {
    id: 1,
    place: 'shop2',
    price: 12000,
    date: '05.11.20',
    isEdit: false,
  },
  {
    id: 2,
    place: 'shop3',
    price: 8000,
    date: '25.07.21',
    isEdit: false,
  },
];

export const reducer = (state: IPurchase[] = initialState, action: Actions): IPurchase[] => {
  switch (action.type) {
    case CREATE_PURCHASE: {
      const {purchase} = (action as CreatePurchaseAction).payload;
      const newPurchaseList = [...state, purchase];
      return [...newPurchaseList];
    }
    case EDIT_PURCHASE: {
      const newPurchaseList = [...state];
      const {id} = (action as EditPurchaseAction).payload;
      const purchaseIndex = state.findIndex((item) => item.id === id);
      if (purchaseIndex != -1) {
        newPurchaseList[purchaseIndex].isEdit = !newPurchaseList[purchaseIndex].isEdit;
      }
      return [...newPurchaseList];
    }
    case DELETE_PURCHASE: {
      const {id} = (action as DeletePurchaseAction).payload;
      const newPurchaseList = state.filter((item) => item.id !== id);
      return [...newPurchaseList];
    }
    case CHANGE_PLACE: {
      const changePlacePurchaseList = [...state];
      const {id, place} = (action as ChangePlaceAction).payload;
      const purchaseIndex = state.findIndex((item) => item.id === id);
      if (purchaseIndex != -1 && place) {
        changePlacePurchaseList[purchaseIndex].place = place;
      }
      return [...changePlacePurchaseList];
    }
    case CHANGE_PRICE: {
      const newPurchaseList = [...state];
      const {id, price} = (action as ChangePriceAction).payload;
      const purchaseIndex = state.findIndex((item) => item.id === id);
      if (purchaseIndex != -1 && (price || price == 0)) {
        newPurchaseList[purchaseIndex].price = price;
      }
      return [...newPurchaseList];
    }
    default:
      return state;
  }
};
