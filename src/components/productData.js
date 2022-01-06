import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CartApp from '../cart/cartApp';
import "../style/styleproducts.css";
import "../style/style.css";
import "../style/variables.css";
import "../style/fonts.css";
import "../style/styleforall.css";
import "../style/product.css";

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

/*return (
    <section id="productList">
    {item.map(item => (
         
        <div className="product" key={item.id}>
            <Link to={`/productDetails/${item.id}`}>
            <h1>{item.name}</h1>
            </Link>
            
            <img className="productImage" src={item.image}></img>
            <h2>{item.price}</h2>
            <CartApp itemName = {item.name}/>
        </div>
    
    
    )
    )}</section> )}
*/
/*const imageStyle = (image) =>(
    {
    backgroundImage: `url=(${image})`
});
*/

function imageStyle(image){
    console.log("image", image)
    let backgroundImage = {backgroundImage: "url(" + image + ")"}
    return backgroundImage;
}

console.log(imageStyle("image"));

return(
    <section className='product-section'>
        <div key={item.id} className="product-side-content">
{item.map(item=>(
    
    
    <div className="product-side-container">
        <div className="product-side-img">
        <Link to={`/productDetails/${item.id}`}>
            <h1 className="product-side-nazev">{item.name}</h1>
            </Link>
            <div className='img-container' style={imageStyle(item.image)}></div>
        </div>
        <h3 className="product-side-nazev">(Item label)</h3>
        <h2 className="product-side-cena">{item.price}</h2>
        <div className="product-side-popisek"></div>
        
    </div>
    


))}
</div>
    </section>
)};
    export default ProductData;
    
 

 


