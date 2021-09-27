import React from 'react';
import EditContainer from './editContainer';
import InfoContainer from './infoContainer';
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
      {purchaseList.map((purchase, index) => (
        purchase.isEdit
          ? (
            <EditContainer
              key={purchase.id}
              purchase={purchase}
              editPurchase={editPurchase}
              onPlaceChange={onPlaceChange}
              onPriceChange={onPriceChange}
            />
          ) : (
            <InfoContainer
              key={purchase.id}
              purchase={purchase}
              index={index}
              editPurchase={editPurchase}
              deletePurchase={deletePurchase}
            />
          )
        )
      )}
    </div>
  );
};

export default ShoppingList;
