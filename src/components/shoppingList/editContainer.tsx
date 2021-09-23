import React from 'react';
import { IPurchase } from '../../utils/interfaces';
import './styles.css';

interface EditContainerProps {
  key: number,
  purchase: IPurchase,
  editPurchase: (arg0: IPurchase) => void;
  onPlaceChange: (arg0: string, arg1: number) => void;
  onPriceChange: (arg0: number, arg1: number) => void;
}

const EditContainer = ({
  purchase,
  editPurchase,
  onPlaceChange,
  onPriceChange,
}: EditContainerProps): JSX.Element => {
  return (
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
  );
};

const areEqual = (prevProps: EditContainerProps, nextProps: EditContainerProps) => {
  return prevProps.purchase === nextProps.purchase;
};

export default React.memo(EditContainer, areEqual);
