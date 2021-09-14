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
];

const App = (): JSX.Element => {
    const [purchaseList, setPurchaseList] = useState<IPurchase[]>(purchases);
    const totalPrice = purchaseList.reduce((total , item) => total + item.price, 0);

    const addPurchase = (purchase: IPurchase) => {
        setPurchaseList([...purchaseList, purchase]);
    };

    const onPlaceChange = (place: string, purchase: IPurchase) => {
        const purchaseIndex = purchaseList.findIndex((item) => item.id === purchase.id);
        purchaseList[purchaseIndex].place = place;
        setPurchaseList([...purchaseList]);
    };

    const onPriceChange = (price: number, purchase: IPurchase) => {
        const purchaseIndex = purchaseList.findIndex((item) => item.id === purchase.id);
        purchaseList[purchaseIndex].price = price;
        setPurchaseList([...purchaseList]);
    };

    const editPurchase = (purchase: IPurchase) => {
        const purchaseIndex = purchaseList.findIndex((item) => item.id === purchase.id);
        purchaseList[purchaseIndex].isEdit = !purchaseList[purchaseIndex].isEdit;
        setPurchaseList([...purchaseList]);
    };

    const deletePurchase = (purchaseId: number) => {
        const newPurchaseList = purchaseList.filter((purchase) => purchaseId !== purchase.id);
        setPurchaseList([...newPurchaseList]);
    };

    return (
        <div className="App">
            <TopElements addPurchase={addPurchase} />
            <TotalPrice totalPrice={totalPrice}/>
            <ShoppingList
                purchaseList={purchaseList}
                editPurchase={editPurchase}
                deletePurchase={deletePurchase}
                onPlaceChange ={onPlaceChange}
                onPriceChange ={onPriceChange}
            />
        </div>
    );
};

export default App;
