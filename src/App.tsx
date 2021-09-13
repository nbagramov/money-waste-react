import React, { useState } from 'react';
import TopElements from './components/topElements';
import TotalPrice from './components/totalPrice';
import ShoppingList from './components/shoppingList';
import { IPurchase } from './utils/interfaces';
import './App.css';

const purchases: IPurchase[] = [
    {
        id: 0,
        place: 'shop1',
        price: 10000,
        date: '03.04.20',
        isEdit: false,
    },
    {
        id: 1,
        place: 'shop2',
        price: 12000,
        date: '05.11.20',
        isEdit: false,
    },
    {
        id: 2,
        place: 'shop3',
        price: 8000,
        date: '25.07.21',
        isEdit: false,
    },
]

const App = (): JSX.Element => {
    const [purchaseList, setPurchaseList] = useState<IPurchase[]>(purchases)
    const totalPrice = purchaseList.reduce((total , item) => total + item.price, 0)

    const addPurchase = (purchase: IPurchase) => {
        setPurchaseList([...purchaseList, purchase])
    }
    const editPurchase = (purchase: IPurchase) => {
        purchase.isEdit = !purchase.isEdit
        setPurchaseList([...purchaseList])
    }
    const deletePurchase = (purchaseId: number) => {
        purchaseList.forEach((purchase, index) => {
            if (purchaseId === purchase.id) {
                purchaseList.splice(index, 1)
            }
        })
        setPurchaseList([...purchaseList])
    }

    return (
        <div className="App">
            <TopElements addPurchase={addPurchase} />
            <TotalPrice totalPrice={totalPrice}/>
            <ShoppingList
                purchaseList={purchaseList}
                editPurchase={editPurchase}
                deletePurchase={deletePurchase}
            />
        </div>
    );
}

export default App;
