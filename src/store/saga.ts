import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import {
  CreatePurchaseAction,
  EditPurchaseAction,
  DeletePurchaseAction,
  IPurchase
} from '../utils/interfaces';
import { putPurchases } from './actions';
import {
  CREATE_PURCHASE,
  EDIT_PURCHASE,
  DELETE_PURCHASE,
  GET_PURCHASES
} from './types';

/** GET PURCHASES */
function* workerLoadPurchases() {
  try {
    const data: IPurchase[] = yield axios.get('http://localhost:8000/').then(res => res.data);
    yield put(putPurchases(data));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherLoadPurchases(): Generator {
  yield takeEvery(GET_PURCHASES, workerLoadPurchases);
}

/** CREATE PURCHASE */
function* workerCreatePurchases({ payload }: CreatePurchaseAction) {
  try {
    const data: IPurchase[] = yield axios.get('http://localhost:8000/').then(res => res.data);
    if (!data.some((item) => item.id === payload.purchase.id)) {
      yield axios.post(`http://localhost:8000/createPurchase/?=id${payload.purchase.id}`, {
        id: payload.purchase.id,
        place: payload.purchase.place,
        price: payload.purchase.price,
        date: payload.purchase.date,
        isEdit: payload.purchase.isEdit,
      });
    }
    const newData: IPurchase[] = yield axios.get('http://localhost:8000/').then(res => res.data);
    yield put(putPurchases(newData));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherCreatePurchases(): Generator {
  yield takeEvery(CREATE_PURCHASE, workerCreatePurchases);
}

/** UPDATE PURCHASE */
function* workerUpdatePurchases({ payload }: EditPurchaseAction) {
  try {
    yield axios.patch(`http://localhost:8000/updatePurchase?id=${payload.purchase.id}`, {
      id: payload.purchase.id,
      place: payload.purchase.place,
      price: payload.purchase.price,
      date: payload.purchase.date,
      isEdit: payload.purchase.isEdit,
    });
  } catch (e) {
    console.error(e);
  }
}

export function* watcherUpdatePurchases(): Generator {
  yield takeEvery(EDIT_PURCHASE, workerUpdatePurchases);
}

/** DELETE PURCHASE */
function* workerRemovePurchases({ payload }: DeletePurchaseAction) {
  try {
    yield axios.delete(`http://localhost:8000/deletePurchase/?id=${payload.id}`);
  } catch (e) {
    console.error(e);
  }
}

export function* watcherRemovePurchases(): Generator {
  yield takeEvery(DELETE_PURCHASE, workerRemovePurchases);
}