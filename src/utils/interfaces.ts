export interface IShopping {
    place?: string,
    price?: number,
    date?: string,
    isEdit?: boolean,
}

export interface IShoppingList extends Array<IShopping> {}

export interface TopElementsProps {
    getPurchase: (arg0: IShopping) => void;
}

export interface ShoppingProps {
    shoppingList: IShoppingList
}