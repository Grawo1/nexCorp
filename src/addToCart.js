import { getAllByAltText } from '@testing-library/react';
import React from 'react';
import {useEffect, useState} from 'react'
import Cart from './cart';


function AddToCart(props){

    //console.log("addToCart")
  console.log(props.i, props.item)
    const [cart_items, setItems] = useState([props.item]); 
   
    function increment(item){
        setItems([...cart_items, props.item]);
        window.localStorage.setItem('Cart ' + props.i, cart_items);
        window.localStorage.getItem('Cart' + props.i);
        

    }
    
    
//console.log(cart_items);
    return(
<div>
  
  <div onClick={() => increment(props.item)}>Click me</div>
 
  </div>
    )
}

export default AddToCart