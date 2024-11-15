import React from "react";

const productData = [
  {
    id: 1,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/watches-13_271ad49c-53ef-4275-becc-7c910f1a16f8_360x.jpg?v=1575433346",
    name: "Bold metallic watch",
    price: "$10.00",
  },
  {
    id: 2,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/bag-11_ab4dfcb0-f2ea-4416-91d7-5543bad53023_360x.jpg?v=1575433331",
    name: "Hylon technical backpack",
    price: "$222.00 - $250.00",
  },
  {
    id: 3,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/bag-11_ab4dfcb0-f2ea-4416-91d7-5543bad53023_360x.jpg?v=1575433331",
    name: "Houble strap backpack",
    price: "$563.00",
  },
  {
    id: 4,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/bag-15_ed69236d-8de7-4b82-9f6c-9e761c5a605c_360x.jpg?v=1575433318",
    name: "Houble strap backpack",
    price: "$290.00",
  },
  {
    id: 5,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/accessories-22_7e7d8bd1-45fe-4785-85d1-f18a79e0f78d_360x.jpg?v=1575433301",
    name: "Before decaf phone case",
    price: "$49.00 - $59.00",
  },
  {
    id: 6,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/shoes-19_37afd1ee-a29f-4066-a976-87351873b6a1_360x.jpg?v=1575433296",
    name: "Guilted ankle boots",
    price: "$480.00",
  },
  {
    id: 7,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/shoes12-1_4d8147e5-0411-4f6f-88aa-5e31cc7a5f28_360x.jpg?v=1575433279",
    name: "Basic contrast sneakers",
    price: "$10.00",
  },
  {
    id: 8,
    img: "https://new-basel2.myshopify.com/cdn/shop/products/bag-21_305535bd-2962-4579-974b-1668fe687eeb_360x.jpg?v=1575433272",
    name: "Backpack double strap",
    price: "$12.00 - $15.00",
  },
];

function ProductItems({ info }) {
  return (
    <div className="product-items">
      <img src={info.img} alt="{info.img}" className="img-fluid w-100" />
      <a>{info.name}</a>
      <a>{info.price}</a>
    </div>
  );
}
function Product() {
  return (
    <>
      {productData.map((item, index) => (
        <ProductItems info={item} key={index} />
      ))}
    </>
  );
}

export default Product;
