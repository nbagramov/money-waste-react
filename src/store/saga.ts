import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import {
  CreatePurchaseAction,
  EditPurchaseAction,
  DeletePurchaseAction,
  IPurchase
} from '../utils/interfaces';
import {
  createPurchaseSuccess,
  createPurchaseFail,
  deletePurchaseSuccess,
  deletePurchaseFail,
  editPurchaseSuccess,
  editPurchaseFail,
  getPurchasesSuccess,
  getPurchasesFail
} from './actions';
import {
  CREATE_PURCHASE,
  EDIT_PURCHASE,
  DELETE_PURCHASE,
  GET_PURCHASES
} from './types';

/** GET PURCHASES */
function* workerLoadPurchases() {
  try {
    const data: IPurchase[] = yield axios.get('https://purchases-list-nbagr.herokuapp.com/purchases/').then(res => res.data);
    yield put(getPurchasesSuccess(data));
  } catch (e) {
    yield put(getPurchasesFail());
  }
}

export function* watcherLoadPurchases(): Generator {
  yield takeEvery(GET_PURCHASES, workerLoadPurchases);
}

/** CREATE PURCHASE */
function* workerCreatePurchases({ payload }: CreatePurchaseAction) {
  try {
    const data: IPurchase[] = yield axios.get('https://purchases-list-nbagr.herokuapp.com/purchases/').then(res => res.data);
    if (!data.some((item) => item.id === payload.purchase.id)) {
      yield axios.post(`https://purchases-list-nbagr.herokuapp.com/purchases/?=id${payload.purchase.id}`, {
        id: payload.purchase.id,
        place: payload.purchase.place,
        price: payload.purchase.price,
        date: payload.purchase.date,
        isEdit: payload.purchase.isEdit,
      });
    }
    yield put(createPurchaseSuccess(payload.purchase));
    const newData: IPurchase[] = yield axios.get('https://purchases-list-nbagr.herokuapp.com/purchases/').then(res => res.data);
    yield put(getPurchasesSuccess(newData));
  } catch (e) {
    yield put(createPurchaseFail(payload.purchase));
  }
}

export function* watcherCreatePurchases(): Generator {
  yield takeEvery(CREATE_PURCHASE, workerCreatePurchases);
}

/** UPDATE PURCHASE */
function* workerUpdatePurchases({ payload }: EditPurchaseAction) {
  try {
    yield axios.patch(`https://purchases-list-nbagr.herokuapp.com/purchases/?id=${payload.purchase.id}`, {
      id: payload.purchase.id,
      place: payload.purchase.place,
      price: payload.purchase.price,
      date: payload.purchase.date,
      isEdit: false,
    });
    yield put(editPurchaseSuccess(payload.purchase));
  } catch (e) {
    yield put(editPurchaseFail(payload.purchase));
  }
}

export function* watcherUpdatePurchases(): Generator {
  yield takeEvery(EDIT_PURCHASE, workerUpdatePurchases);
}

/** DELETE PURCHASE */
function* workerRemovePurchases({ payload }: DeletePurchaseAction) {
  try {
    yield axios.delete(`https://purchases-list-nbagr.herokuapp.com/purchases/?id=${payload.id}`);
    yield put(deletePurchaseSuccess(payload.id));
  } catch (e) {
    yield put(deletePurchaseFail(payload.id));
  }
}

export function* watcherRemovePurchases(): Generator {
  yield takeEvery(DELETE_PURCHASE, workerRemovePurchases);
}
