import React from 'react';
import {Switch,Route} from 'react-router-dom';
import MainPage from './Components/HomePage/MainPage'
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/MainShop';
import AddItem from './Components/AddItem/AddItem';
import ItemPage from './Components/Shop/ItemPage';
import Checkout from './Components/CheckOut/CheckOut'


export default (
    <Switch>
        <Route exact path = "/" component= { MainPage }  />
        <Route path = "/cart" component={Cart}/>
        <Route path = "/shop" component={Shop}/>
        <Route path = "/additem" component={AddItem}/>
        <Route path = "/checkout" component={Checkout}/>
        <Route path = "/item/:id" component={ItemPage}/>
        <Route path = '*' render = { () => {
            <div>
                <p> 404 not found </p>
            </div>
        } } />
    </Switch>
)