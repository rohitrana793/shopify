import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Category from "./component/Category";
import Product from "./component/Product";
function App() {
  return (
    <>
      <Header />
      <section className="banner-section">
        <Banner />
      </section>

      <section className="category mt-5 container">
        <div className="title">
          <h5>MADE THE HARD WAY</h5>
          <h2>FEATURED CATEGORIES</h2>
          <span>-- X --</span>
        </div>
        <div className="paragraph mt-2 mb-4">
          Basel & Co. is a powerful eCommerce theme for Shopify. Visit <br />{" "}
          our shop page to see all main features for <a href="">Your Store</a>
        </div>
        <div className="category-wrapper">
          <Category />
        </div>
        <div className="discount mt-5">
          <p>
            UP TO 70% OFF THE ENTIRE STORE!. MADE WITH LOVE by{" "}
            <a href="">The4 studio</a>
          </p>
        </div>
      </section>

      <section className="product container mt-5">
        <div className="title">
          <h5>MADE THE HARD WAY</h5>
          <h2>FEATURED PRODUCTS</h2>
          <span>-- X --</span>
        </div>
        <div className="product-wrapper mt-5">
          <Product />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
