import react from "react";
import { useState, useEffect } from "react";
import AddToCart from "./addToCart";

function Cart(){
    
    console.log("Cart")
        const items =  window.localStorage.getItem('List');

    return(
     <div>
         <h2>List</h2>
     <div>{items}</div>
     
         </div>
   
 )

}
export default Cart;
