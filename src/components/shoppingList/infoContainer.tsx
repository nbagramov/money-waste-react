import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IPurchase } from '../../utils/interfaces';
import './styles.css';

interface InfoContainerProps {
  key: number,
  purchase: IPurchase,
  index: number,
  editPurchase: (arg0: IPurchase) => void;
  deletePurchase: (arg0: number) => void;
}

const InfoContainer = ({
  purchase,
  index,
  editPurchase,
  deletePurchase
}: InfoContainerProps): JSX.Element => {
  return (
    <div className="purchase-container" key={purchase.id}>
      <span className="purchase-place">{index+1}) {purchase.place} {purchase.date}</span>
      <span className="purchase-price">{purchase.price} р.</span>
      <div className="icon-container">
        <EditIcon onClick={() => editPurchase(purchase)}/>
        <DeleteIcon onClick={() => deletePurchase(purchase.id)}/>
      </div>
    </div>
  );
};

const areEqual = (prevProps: InfoContainerProps, nextProps: InfoContainerProps) => {
  return prevProps.purchase === nextProps.purchase && prevProps.index === nextProps.index;
};

export default React.memo(InfoContainer, areEqual);
