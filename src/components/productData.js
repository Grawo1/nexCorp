/* eslint-disable */ 

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

//count je pocet polozek v kosiku v localStorage
for(i of item){
i.count = 1;
}



function imageStyle(image){
    let backgroundImage = {backgroundImage: "url(" + image + ")"}
    return backgroundImage;
}

class Product extends React.Component {
    constructor(prop) {
      super(prop);
      this.prop = prop;
      
    }
    render() {
      return (
        <div key={this.prop.id} className="product-side-container">
        <div className="product-side-img">
        <Link to={`/productDetails/${this.prop.id}`}>
                <h1 className="product-side-nazev">{this.prop.name}</h1>
                </Link>
              
            <div className="img-container1" style={imageStyle(this.props.image)}></div>
        </div>
        <div className="product-side-desc">{this.prop.kind}</div>
        <div className="product-side-cena">{this.prop.price}</div>
        <div className="product-side-popisek">lorem ipsum</div>
        <CartApp itemProp={this.prop}/>
    </div>
      );
    }
  }
 


return(
    <section className='product-section'>
        <div key={item.id} className="product-side-content">
{item.map(item=>( 
    <Product key={item.id} id={item.id} name={item.name} image={item.image} kind={item.product_kind} price={item.price} count={item.count}  />


))}
</div>
    </section>
)


};
    export default ProductData;
    
 

 


