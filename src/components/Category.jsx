/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Styles
import "./category.scss";

const Category = (props) => {
  const { title, imageUrl, linkUrl, size } = props.category;

  return (
    <>
      <div
        className={`${size} category-item flex grow shrink basis-auto items-center justify-center border border-black mt-0 mr-2 ml-2 mb-4 overflow-hidden hover:cursor-pointer`}
      >
        <div
          className="background-image w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
};

export default Category;
