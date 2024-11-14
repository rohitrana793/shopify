import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Category from "./component/Category";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="featured-category mt-5">
        <div className="container">
          <div className="title">
            <h5>MADE THE HARD WAY</h5>
            <h2>FEATURED CATEGORIES</h2>
            <span>-- X --</span>
          </div>
          <Category />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
