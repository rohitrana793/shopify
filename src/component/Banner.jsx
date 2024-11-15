import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const bannerData = [
  {
    id: 1,
    bannerText: "MAN BAGS",
    bannerDescription: "New Men's Collection",
    bannerCover:
      "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582",
  },
  {
    id: 2,
    bannerText: "NEW STYLE",
    bannerDescription: "Boot's Collection For Men",
    bannerCover:
      "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_2.jpg?v=1613716582",
  },
];

function Banneritems(props) {
  return (
    <div className="banner-items">
      <img
        src={props.Data.bannerCover}
        className="img-fluid w-100"
        alt="{props.Data.bannerText}"
      />
      <div className="container">
        <div className="banner-content">
          <h2 className="banner-heading m-0 p-0">{props.Data.bannerText}</h2>
          <p>{props.Data.bannerDescription}</p>
          <a href="">Shop Now</a>
        </div>
      </div>
    </div>
  );
}
function Banner() {
  return (
    <>
      <Carousel responsive={responsive}>
        {bannerData.map((item, index) => {
          return <Banneritems Data={item} key={index} />;
        })}
      </Carousel>
      ;
    </>
  );
}
export default Banner;
