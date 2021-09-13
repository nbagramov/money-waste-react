import React, { useState } from 'react';
import TopElements from './components/topElements';
import TotalPrice from './components/totalPrice';
import ShoppingList from './components/shoppingList';
import { IPurchase } from './utils/interfaces';
import './App.css';

const purchases: IPurchase[] = [
    {
        place: 'shop1',
        price: 10000,
        date: '03.04.20',
        isEdit: false,
    },
    {
        place: 'shop2',
        price: 12000,
        date: '05.11.20',
        isEdit: false,
    },
    {
        place: 'shop3',
        price: 8000,
        date: '25.07.21',
        isEdit: false,
    },
]

const App = (): JSX.Element => {
    const [purchase, setPurchase] = useState<IPurchase | undefined>()
    const [shoppingList, setShoppingList] = useState<IPurchase[]>(purchases)

    if (purchase) {
        setShoppingList(() => [...shoppingList, purchase])
        setPurchase(undefined)
    }

    return (
        <div className="App">
            <header className="App-header">
                <TopElements getPurchase={(purchase) => setPurchase(purchase)}/>
                <TotalPrice shoppingList={shoppingList}/>
                <ShoppingList shoppingList={shoppingList} />
            </header>
        </div>
    );
}

export default App;
