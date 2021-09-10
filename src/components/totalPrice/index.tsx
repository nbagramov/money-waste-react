import React from "react";
import { ShoppingProps } from "../../utils/interfaces";
import './styles.css'

const TotalPrice = ({shoppingList}: ShoppingProps): JSX.Element => {
    let totalPrice = 0
    shoppingList.map((purchase) => {
        if (purchase.price) {
            totalPrice = totalPrice + purchase.price
        }
        return totalPrice;
    })

    return(
        <div className="total-price-container">
            <span className="total-price">Итого: {totalPrice} р.</span>
        </div>
    )
}

export default TotalPrice;