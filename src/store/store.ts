import { createStore, Reducer } from 'redux';
import { reducer } from './reducer';
import { Actions, IPurchase } from '../utils/interfaces';

export const store = createStore(reducer as Reducer<IPurchase[], Actions>);
