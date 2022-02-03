
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GenderFilter from "./components/genderFiltered";
import KindDetails from "./components/kindDetails";
import ProductDetails from "./components/productDetails";
import Landing from "./landing";
import CartApp from "./cart/cart";

function Routing() {
    return (
        
        <Router>
                <Switch>
                <Route exact path="/">
                        <Landing gender="men" />
                        
                    </Route>
                   

                    <Route exact path="/cart">
                        <CartApp />
                    </Route>

                    <Route exact path="/:gender">
                        <GenderFilter />
                        
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
