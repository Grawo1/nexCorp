import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CartApp from '../cart/cartApp';


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
    let backgroundImage = {backgroundImage: `url=(${image})`}
    return backgroundImage;
}

console.log(imageStyle("image"));

return(
    <section className='product-section'>
{item.map(item=>(
    
    <div key={item.id} className="product-side-content">
    <div className="product-side-container">
        <div className="product-side-img">
            <div className='img-container' style={ backgroundImage: url= ./asd}>img</div>
        </div>
        <h3 className="product-side-nazev">(Item label)</h3>
        <h1 className="product-side-desc">{item.name}</h1>
        <h2 className="product-side-cena">{item.price}</h2>
        <div className="product-side-popisek"></div>
    </div>
    
</div>

))}
    </section>
)};
    export default ProductData;
    
 

 


