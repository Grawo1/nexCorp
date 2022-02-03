


import React, {useState, useEffect} from "react";




  function CartApp(props) {
    console.log(props.itemProp.id)


function addItem(itemProp){

  let item = itemProp;
  let strgStatus = JSON.parse(window.localStorage.getItem("cart" + item.id));
  console.log(strgStatus)
  if(strgStatus !== null){
    strgStatus.count ++
    window.localStorage.setItem("cart" + item.id, JSON.stringify(strgStatus))
    console.log("if", strgStatus.count)

  }else{
window.localStorage.setItem("cart" + item.id, JSON.stringify(item));
console.log("else" , item.count)
  }


}

return(
  <section>
  
  <div onClick={() => addItem(props.itemProp)}>Click me</div>
 
  </section>
)
}

export default CartApp;
