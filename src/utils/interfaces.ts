export interface IPurchase {
    id: number,
    place: string,
    price: number,
    date: string,
    isEdit: boolean,
}

export interface CreatePurchaseAction {
  type: string,
  payload: {
    purchase: IPurchase,
  }
}

export interface EditPurchaseAction {
  type: string,
  payload: {
    id: number,
  }
}

export interface DeletePurchaseAction {
  type: string,
  payload: {
    id: number,
  }
}

export interface ChangePlaceAction {
  type: string,
  payload: {
    id: number,
    place: string,
  }
}

export interface ChangePriceAction {
  type: string,
  payload: {
    id: number,
    price: number,
  }
}


export type Actions = CreatePurchaseAction | EditPurchaseAction | DeletePurchaseAction | ChangePlaceAction | ChangePriceAction;