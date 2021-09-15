import {Action, IPurchase} from '../utils/interfaces';
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

export const reducer = (state: IPurchase[] = initialState, action: Action): IPurchase[] => {
  switch (action.type) {
    case CREATE_PURCHASE:
      state.push(action.purchase);
      return  [...state];
    case EDIT_PURCHASE:
      action.purchase.isEdit = !action.purchase.isEdit;
      return [...state];
    case DELETE_PURCHASE:
      state = state.filter((purchase) => action.purchase.id !== purchase.id);
      return [...state];
    case CHANGE_PLACE:
      if (action.place) {
        action.purchase.place = action.place;
      }
      return [...state];
    case CHANGE_PRICE:
      if (action.price) {
        action.purchase.price = action.price;
      }
      return [...state];
    default:
      return state;
  }
};