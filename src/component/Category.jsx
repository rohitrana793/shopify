import React from "react";

const categoryData = [
  {
    id: 1,
    categoryImage:
      "https://new-basel2.myshopify.com/cdn/shop/files/cat-bag-5_720x.jpg?v=1613716577",
    categoryName: "bag",
  },
  {
    id: 2,
    categoryImage:
      "https://new-basel2.myshopify.com/cdn/shop/files/boot-category-1-3-min_370x.jpg?v=1613716583",
    categoryName: "footware",
  },
  {
    id: 3,
    categoryImage:
      "https://new-basel2.myshopify.com/cdn/shop/files/wooman-cat_370x.jpg?v=1613716577",
    categoryName: "women",
  },
  {
    id: 4,
    categoryImage:
      "https://new-basel2.myshopify.com/cdn/shop/files/cat-watch-2_370x.jpg?v=1613716577",
    categoryName: "watches",
  },
];

function Categoryitems({ value }) {
  return (
    <div className="item-details">
      <div className="wrapper">
        <img
          src={value.categoryImage}
          alt="{value.itemName}"
          className="img-fluid w-100"
        />
        <a href="">{value.categoryName}</a>
      </div>
    </div>
  );
}

function Category() {
  return (
    <>
      {categoryData.map((items, index) => (
        <Categoryitems value={items} key={index} />
      ))}
    </>
  );
}

export default Category;
