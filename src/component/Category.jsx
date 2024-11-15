import React from "react";

const categoryData = [
  {
    id: 1,
    img: "https://new-basel2.myshopify.com/cdn/shop/files/cat-bag-5_720x.jpg?v=1613716577",
    name: "Bag",
  },
  {
    id: 2,
    img: "https://new-basel2.myshopify.com/cdn/shop/files/boot-category-1-3-min_370x.jpg?v=1613716583",
    name: "Footware",
  },
  {
    id: 3,
    img: "https://new-basel2.myshopify.com/cdn/shop/files/cat-watch-2_370x.jpg?v=1613716577",
    name: "Watches",
  },
  {
    id: 4,
    img: "https://new-basel2.myshopify.com/cdn/shop/files/wooman-cat_370x.jpg?v=1613716577",
    name: "Women",
  },
];

function CategoryItems({ value }) {
  return (
    <div className="category-items">
      <img src={value.img} alt="{value.name}" className="img-fluid w-100" />
      <a href="" className="product">
        {value.name}
      </a>
    </div>
  );
}

function Category() {
  return (
    <>
      {categoryData.map((items, index) => (
        <CategoryItems value={items} key={index} />
      ))}
    </>
  );
}

export default Category;
