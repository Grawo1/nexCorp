import React, {useState, useEffect} from "react";
import GetItem from "./getItem";
var i = 0;


function CartApp(itemName) {
let storagedText = window.localStorage.getItem('List');
if(storagedText === null){
  storagedText = " ";
}
console.log(storagedText);

  const [text, setText] = useState(storagedText);

 function addItem(){

  console.log(itemName.itemName);
  setText(storagedText + itemName.itemName);
  window.localStorage.setItem("cart", text);

 }


return(
  <section>
  
  <div onClick={() => addItem()}>Click me</div>
 
  </section>
)
}

export default CartApp;
