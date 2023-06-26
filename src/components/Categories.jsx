import React, { useState } from "react";

const categoriesData = [
  {
    title: "TVs",
    imageUrl:
      "https://img.freepik.com/premium-photo/television-with-wave-painted-it_902639-47038.jpg?size=626&ext=jpg&ga=GA1.1.1326869177.1680443547&semt=sph",
    id: 1,
    linkUrl: "categories/televisions",
  },
  {
    title: "Mobiles",
    imageUrl:
      "https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?size=626&ext=jpg&ga=GA1.1.1326869177.1680443547&semt=sph",
    id: 2,
    linkUrl: "categories/mobiles",
  },
  {
    title: "Labtops & PCs",
    imageUrl:
      "https://img.freepik.com/premium-photo/department-laptops-tech-store-buy-laptop_245974-2709.jpg?size=626&ext=jpg&ga=GA1.2.1326869177.1680443547&semt=ais",
    id: 3,
    linkUrl: "categories/laptops",
  },
  {
    title: "Gaming",
    imageUrl:
      "https://img.freepik.com/premium-photo/gamer-player-with-joystick-play-game-digital-online-gaming-streaming-esports-challenge-technology-entertainment_800588-140.jpg?size=626&ext=jpg&ga=GA1.2.1326869177.1680443547&semt=sph",
    size: "large",
    id: 5,
    linkUrl: "categories/gaming",
  },
  {
    title: "Accessories",
    imageUrl:
      "https://img.freepik.com/premium-photo/collection-apple-products-including-apple-products_896360-1985.jpg?size=626&ext=jpg&ga=GA1.1.1326869177.1680443547&semt=ais",
    size: "large",
    id: 5,
    linkUrl: "categories/accessories",
  },
];

const Categories = () => {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <>
      <section className="categories">
        {categories.map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </section>
    </>
  );
};

export default Categories;
