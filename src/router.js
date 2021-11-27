import React from "react";
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import GenderFilter from "./components/genderFiltered";
import KindDetails from "./components/kindDetails";
import ProductDetails from "./components/productDetails";
import Landing from "./landing";



function Routing() {
    console.log("this is working");
<Landing></Landing>
    return (
        
        <Router>
                <Switch>
                <Route exact path="/">
                        <Landing gender="men" />
                        
                    </Route>
                   
                    <Route exact path="localhost/:gender">
                        <GenderFilter />
                        
                    </Route>

                    
                    
                    <Route path="localhost/productDetails/:id">
                        <ProductDetails />
                    </Route>

                    <Route path="localhost/kindDetails/:gender/:kind">
                        <KindDetails />
                    </Route>

                </Switch>
        </Router>
    )
}

export default Routing
