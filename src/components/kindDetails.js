
import React, {useState, useEffect} from "react";
import { Link, useParams} from 'react-router-dom';






function KindDetails(){
    let { kind } = useParams();
    let { gender } = useParams();
    const [filter, setFilter] = useState([]);
    useEffect(()=>{
        let url = `http://kutak.epsilon.spstrutnov.cz/clothesEshop/kind_details_react.php?kind=${kind}&gender=${gender}`;
        console.log(url);
    fetch(url)
        .then(res=> res.json())
        .then(
            (result) => {
                setFilter(result);
            }
            )
    
        },[])
    
return(


<section id="productList">
    {filter.map(filter => (
        
        <div key={filter.id} className="product">
        <Link to={`/productDetails/${filter.id}`}>
        <h2>{filter.name}</h2>
        </Link>
       
        <img className="productImage" src={filter.image}> </img>
        <h3>{filter.price}</h3>

        </div>

))}
</section>

        
)


}


export default KindDetails;