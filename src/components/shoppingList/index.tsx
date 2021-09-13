import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IPurchase } from '../../utils/interfaces';
import './styles.css'

interface PurchaseListProps {
    purchaseList: IPurchase[]
}

const ShoppingList = ({purchaseList}: PurchaseListProps): JSX.Element => {
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
                                />
                                <input
                                    className="purchase-price-input"
                                    defaultValue={purchase.price}
                                />
                                <button className="button-end-edit">Завершить</button>
                            </div>
                        ) : (
                            <div className="purchase-container" key={purchase.id}>
                                <span className="purchase-place">{index+1}) {purchase.place} {purchase.date}</span>
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