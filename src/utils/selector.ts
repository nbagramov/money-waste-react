import { createSelector } from 'reselect';
import { State } from './interfaces';

const selectPurchases = (state: State) => state.purchases;

export const Selector = createSelector(
  selectPurchases,
  purchases => purchases
);