import React from "react";
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import GenderFilter from "./components/genderFiltered";
import KindDetails from "./components/kindDetails";
import ProductDetails from "./components/productDetails";
import Landing from "./landing";
import Cart from "./cart"



function Routing() {
    return (
        
        <Router>
                <Switch>
                <Route exact path="/">
                        <Landing gender="men" />
                        
                    </Route>
                   
                    <Route exact path="/:gender">
                        <GenderFilter />
                        
                    </Route>

                    <Route exact path="/eshop/cart">
                        <Cart />
                    </Route>
                    
                    <Route path="/productDetails/:id">
                        <ProductDetails />
                    </Route>

                    <Route path="/kindDetails/:gender/:kind">
                        <KindDetails />
                    </Route>

                </Switch>
        </Router>
    )
}

export default Routing
