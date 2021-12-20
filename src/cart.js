import react from "react";
import { useState, useEffect } from "react";
import AddToCart from "./addToCart";

function Cart(){
        const [cart, setCart] = useState([]);
       
        
function storage(){
    
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

while ( i-- ) {
    values.push( localStorage.getItem(keys[i]) );
}
console.log(values);
return {values};
}

    useEffect(()=>{        
        storage();
        
    },[])
    

    return (
    <section id="productList">
        <h2>{storage().values}</h2>

    </section>   
    )
    //<AddToCart i={item.id} item = {item.name}/>
    }

    


export default Cart;
