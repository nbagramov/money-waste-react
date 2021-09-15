import { createStore, Reducer } from 'redux';
import { reducer } from './reducer';
import { Action, IPurchase } from '../utils/interfaces';

export const store = createStore(reducer as Reducer<IPurchase[], Action>);