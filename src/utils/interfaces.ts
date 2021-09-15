export interface IPurchase {
    id: number,
    place: string,
    price: number,
    date: string,
    isEdit: boolean,
}

export interface Action {
    type: string,
    purchase: IPurchase,
    place?: string,
    price?: number,
}