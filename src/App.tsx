import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPurchase,
  editPurchase,
  deletePurchase,
  changePlace,
  changePrice
} from './store/actions';
import TopElements from './components/topElements';
import TotalPrice from './components/totalPrice';
import ShoppingList from './components/shoppingList';
import { IPurchase } from './utils/interfaces';
import './App.css';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const purchaseList: IPurchase[] = useSelector<IPurchase[], IPurchase[]>(state => state);
    const totalPrice = purchaseList.reduce((total , item) => total + item.price, 0);

    return (
        <div className="App">
            <TopElements addPurchase={(purchase) => dispatch(createPurchase(purchase))} />
            <TotalPrice totalPrice={totalPrice}/>
            <ShoppingList
                purchaseList={purchaseList}
                editPurchase={(purchase) => dispatch(editPurchase(purchase))}
                deletePurchase={(purchase) => dispatch(deletePurchase(purchase))}
                onPlaceChange={(place, purchase) => dispatch(changePlace(place, purchase))}
                onPriceChange={(price, purchase) => dispatch(changePrice(price, purchase))}
            />
        </div>
    );
};

export default App;
