import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Obal from '../addToCart';
import AddToCart from '../addToCart'


function ProductData ({gender}){
    let i = 0;
    const [item, setProductItem] = useState([]);
   
    
useEffect(()=>{

    fetch(`http://kutak.epsilon.spstrutnov.cz/clothesEshop/get_data.php?data=eshop_products&gender=${gender}`)
    .then(res=> res.json())
    .then(
        (result) => {
            setProductItem(result);
        }
        )
},[])


    return (
<section id="productList">
{item.map(item => (
     
    <div className="product" key={item.id}>
        <Link to={`/productDetails/${item.id}`}>
        <h1>{item.name}</h1>
        </Link>
        
        <img className="productImage" src={item.image}></img>
        <h2>{item.price}</h2>
       <AddToCart i={item.id} item={item.name}/>

    </div>
)
)}
</section>   
)
//<AddToCart i={item.id} item = {item.name}/>
}
export default ProductData

