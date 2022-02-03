import React from "react";
import { Link } from 'react-router-dom';

let i = 0

function Cart(){
    console.log(window.localStorage)
    let storage = window.localStorage;
    let strgLen = storage.length - 1;
    console.log(strgLen)

let obj = []

for(strgLen; strgLen >= i; strgLen--){
    
    obj.push(window.localStorage.getItem(window.localStorage.key(strgLen)));
    console.log(obj)
}


function imageStyle(image){
    let backgroundImage = {backgroundImage: "url(" + image + ")"}
    return backgroundImage;
}


function translateData(pr){
    let parsedData = JSON.parse(pr);
    console.log(parsedData.name)
    return ( 
    <div key={parsedData.id} className="product-side-container">
    <div className="product-side-img">
    <Link to={`/productDetails/${parsedData.id}`}>
            <h1 className="product-side-nazev">{parsedData.name}</h1>
            </Link>
          
        <div className="img-container1" style={imageStyle(parsedData.image)}></div>
    </div>
    <div className="product-side-nazev">{parsedData.kind}</div>
    <div className="product-side-cena">{parsedData.price}</div>
    <div className="product-side">{parsedData.count} KS</div>
    <div className="product-side-popisek">lorem ipsum</div>
</div>)


}

  return(
    <section className='product-section'>
        <div className="product-side-content">
    {obj.map( (product) => translateData(product))} 
</div>
    </section>
)

  }

export default Cart; 