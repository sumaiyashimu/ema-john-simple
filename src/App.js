import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review'
import Inventory from "./components/Inventory/Inventory";
import NOtFound from "./components/NotFound/NOtFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";






function App() {
  
  
  return (
    <div>
      <Header></Header>
      
      <Router>

        <Routes>
          <Route path="/shop" element={<Shop></Shop>}>
         
          </Route>
        
        <Route path="/review" element={<Review></Review>} >
           
        </Route>
        <Route path="/inventory" element={ <Inventory></Inventory> }>

        </Route>

              <Route exact path="/" element={<Shop></Shop>}>

              </Route>

              <Route path= "/:productKey" element={<ProductDetail></ProductDetail>}>
                

              </Route>

              <Route path="*" element={ <NOtFound></NOtFound>}>
                   
              </Route>
        </Routes>
        
      
      
      

      </Router>
      
    </div>
  );
}

export default App;
