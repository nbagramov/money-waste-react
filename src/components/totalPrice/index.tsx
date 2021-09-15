import React from 'react';
import './styles.css';

interface TotalPriceProps {
  totalPrice: number
}

const TotalPrice = ({totalPrice}: TotalPriceProps): JSX.Element => {
  return(
    <div className="total-price-container">
      <span className="total-price">Итого: {totalPrice} р.</span>
    </div>
  );
};

export default TotalPrice;