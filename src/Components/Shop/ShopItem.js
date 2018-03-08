import React from 'react';

function ShopItem(props){
    return(
        <div className = "item-container">
            <div className = "item-image">
                <img/>
            </div>
            <div className="item-info">
                <h1>{props.itemName}</h1>
                <h4>{props.itemPrice}</h4>
                <p></p>
            </div>
        </div>
    )
}
export default ShopItem;