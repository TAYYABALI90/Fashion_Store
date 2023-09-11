import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import Electronics from "./components/electronics/Electronics";
import SportsBooks from "./components/sports & books/SportsBooks";
import Sale from "./components/sale/Sale";

import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <>

      <div className="App">

        <Navbar />

        <Routes>

          <Route path="/" exact element={
            <>
              <Home />
              <Products />
              <Testimonials />
              <Blog />
            </>
          } />

          <Route path="/shop" exact element={
            <>
              <Shop />
            </>
          } />

          <Route path="/electronics" exact element={
            <>
              <Electronics />
            </>
          } />

          <Route path="/sports" exact element={
            <>
              <SportsBooks />
            </>
          } />

          <Route path="/sale" exact element={
            <>
              <Sale />
            </>
          } />

          <Route path="/contact" exact element={
            <>
              <Contact />
            </>
          } />

        </Routes>

        <Newsletter />
        <Footer />

      </div>

    </>

  );

}

export default App;