import { createStore, applyMiddleware, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { watcherLoadPurchases, watcherCreatePurchases, watcherRemovePurchases, watcherUpdatePurchases} from './saga';
import { Actions, IPurchase } from '../utils/interfaces';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer as Reducer<IPurchase[], Actions>, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherLoadPurchases);
sagaMiddleware.run(watcherCreatePurchases);
sagaMiddleware.run(watcherUpdatePurchases);
sagaMiddleware.run(watcherRemovePurchases);