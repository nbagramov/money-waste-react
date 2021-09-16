import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IPurchase } from '../../utils/interfaces';
import './styles.css';

interface PurchaseListProps {
  purchaseList: IPurchase[]
  editPurchase: (arg0: IPurchase) => void;
  deletePurchase: (arg0: number) => void;
  onPlaceChange: (arg0: string, arg1: number) => void;
  onPriceChange: (arg0: number, arg1: number) => void;
}

const ShoppingList = ({
  purchaseList,
  editPurchase,
  deletePurchase,
  onPlaceChange,
  onPriceChange,
}: PurchaseListProps): JSX.Element => {
  return (
    <div className="shopping-list-container">
      {purchaseList.map((purchase, index) => {
        return (
          purchase.isEdit
            ? (
              <div className="purchase-container-edit" key={purchase.id}>
                <input
                  className="purchase-place-input"
                  defaultValue={purchase.place}
                  onChange={(event) =>  onPlaceChange(event.target.value, purchase.id)}
                />
                <input
                  className="purchase-price-input"
                  type="number"
                  defaultValue={purchase.price}
                  onChange={(event) => onPriceChange(Number(event.target.value), purchase.id)}
                />
                <button
                  className="button-end-edit"
                  onClick={() => editPurchase(purchase)}
                >
                  Завершить
                </button>
              </div>
            ) : (
              <div className="purchase-container" key={purchase.id}>
                <span className="purchase-place">{index+1}) {purchase.place} {purchase.date}</span>
                <span className="purchase-price">{purchase.price} р.</span>
                <div className="icon-container">
                  <EditIcon onClick={() => editPurchase(purchase)}/>
                  <DeleteIcon onClick={() => deletePurchase(purchase.id)}/>
                </div>
              </div>
            )
        );
      })}
    </div>
  );
};

export default ShoppingList;
