import React, { useEffect, useState } from 'react';
import TopElements from "./components/topElements";
import TotalPrice from "./components/totalPrice";
import ShoppingList from "./components/shoppingList";
import { IShopping } from "./utils/interfaces";
import './App.css';

const bought: IShopping[] = [
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
    const [purchase, setPurchase] = useState<IShopping>()
    const [shoppingList, setShoppingList] = useState<IShopping[]>(bought)

    useEffect(() => {
        if (purchase) {
            setShoppingList(() => [...shoppingList, purchase])
        }
    }, [purchase])

    console.log(shoppingList)

    const getPurchase = (purchase: IShopping) => {
        const {place, price, date} = purchase;
        setPurchase({place, price, date, isEdit: false})
    }

    return (
        <div className="App">
            <header className="App-header">
                <TopElements getPurchase={getPurchase}/>
                <TotalPrice shoppingList={shoppingList}/>
                <ShoppingList shoppingList={shoppingList} />
            </header>
        </div>
    );
}

export default App;
