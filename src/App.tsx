import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPurchase,
  editPurchase,
  deletePurchase,
  changePlace,
  changePrice,
  getPurchases
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
    useEffect(() => {
      dispatch(getPurchases());
    }, []);

    return (
        <div className="App">
            <TopElements addPurchase={(purchase) => dispatch(createPurchase(purchase))} />
            <TotalPrice totalPrice={totalPrice}/>
            <ShoppingList
                purchaseList={purchaseList}
                editPurchase={(purchase) => dispatch(editPurchase(purchase))}
                deletePurchase={(id) => dispatch(deletePurchase(id))}
                onPlaceChange={(place, id) => dispatch(changePlace(place, id))}
                onPriceChange={(price, id) => dispatch(changePrice(price, id))}
            />
        </div>
    );
};

export default App;
