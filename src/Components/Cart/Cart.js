import React,{Component} from 'react';
import axios from 'axios';
import ShopItem from '../Shop/ShopItem'

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            cart:[]
        }
    }
    componentDidMount(){
        axios
        .get('/api/cart')
        .then(response => this.setState({cart:response.data.cart}))
        .catch(console.log())
    }
    deleteItem(id){
        axios.delete(`/api/cart/${id}`).then(res => {
            this.setState({
              cart: res.data.cart
            })
          })
    }
    render(){
        let cartList = [];
        const cartItems = this.state.cart;
        console.log(this.state.cart);
        if (!(this.state.cart.length > 0)) {
            cartList = <div> loading.... </div>
        } 
        else {
            cartList = cartItems.map((item, i) => {
                return ( 
                <div key = {i} className="checkout-item-main-div">
                    <ShopItem itemName = {item.product_name} itemPrice = {item.product_price}/>
                    <button onClick = {() => {
                    this.deleteItem(item.id)}}>Delete</button> 
                </div> 
                )
            })
        }

        return(
            <div>{cartList}</div>

        )
    }
}
export default Cart;