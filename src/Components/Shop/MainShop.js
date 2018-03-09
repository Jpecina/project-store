import React, {Component} from 'react';
import axios from 'axios';
import ShopItem from './ShopItem';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';


class Shop extends Component{
    constructor(){
        super();
        this.state = {
            ShopItems:[],
            CartItems:[]
        }
        this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount(){
        axios.get('/api/products').then(response => {
            this.setState({ShopItems:response.data})
        })
    }
    addToCart(item){
        axios.post("/api/cart",item).then(response => console.log(response.data.cart)).catch(
            console.log
        )
    }

    render(){
        const shopList = this.state.ShopItems.map((item,i)=>{
            return(
                <div className="shop-list">
                    <Link to={`/item/${item.id}`} key ={i}>
                        <ShopItem itemName = {item.product_name} itemPrice = {item.product_price}/>
                    </Link>
                        <button onClick = {e=>this.addToCart(item)}>Quick Add</button>
                        <button >More Info</button>        
                </div>
            )
        })

        return (
        <div className = "shop-page">
        <Header/>
            <div className="shop-render">{shopList}</div>
        </div>
        )
    }
}

export default Shop;
