import React from 'react';
import { IPurchase } from '../../utils/interfaces';
import './styles.css'

interface ShoppingListProps {
    shoppingList: IPurchase[]
}

const TotalPrice = ({shoppingList}: ShoppingListProps): JSX.Element => {
    let totalPrice = shoppingList.reduce((total , item) => total + item.price, 0)

    return(
        <div className="total-price-container">
            <span className="total-price">Итого: {totalPrice} р.</span>
        </div>
    )
}

export default TotalPrice;