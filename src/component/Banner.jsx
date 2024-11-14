import React from "react";
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
      {bannerData.map((item, index) => {
        return <Banneritems Data={item} key={index} />;
      })}
    </>
  );
}
export default Banner;
