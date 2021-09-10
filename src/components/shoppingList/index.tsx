import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ShoppingProps } from "../../utils/interfaces";
import './styles.css'

const ShoppingList = ({shoppingList}: ShoppingProps): JSX.Element => {
    return (
        <div className="shopping-list-container">
            {shoppingList.map((purchase, index) => {
                const purchaseNumber = index+1
                return (
                    purchase.isEdit
                        ? (
                            <div className="purchase-container-edit" key={purchaseNumber}>
                                <input
                                    className="purchase-place-input"
                                    defaultValue={purchase.place}
                                />
                                <input
                                    className="purchase-price-input"
                                    defaultValue={purchase.price}
                                />
                                <button className="button-end-edit">Завершить</button>
                            </div>
                        ) : (
                            <div className="purchase-container" key={purchaseNumber}>
                                <span className="purchase-place">{purchaseNumber}) {purchase.place} {purchase.date}</span>
                                <span className="purchase-price">{purchase.price} р.</span>
                                <div className="icon-container">
                                    <EditIcon />
                                    <DeleteIcon />
                                </div>
                            </div>
                        )
                )}
            )}
        </div>
    )
}

export default ShoppingList;