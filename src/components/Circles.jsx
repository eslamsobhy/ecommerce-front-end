import { Link } from "react-router-dom";

import Circle from "./Circle";

function Circles() {
  return (
    // uncomment the routing link
    <>
      <div className="flex justify-center items-center mx-12">
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl">
          <Link to="/products?orderBy=bestSeller">
            <Circle
              srcImg={"/public/circles-images/best-sellers.png"}
              title={"Best Sellers"}
            />
          </Link>

          <Link to="/products?orderBy=newArrivals">
            <Circle
              srcImg={"/public/circles-images/new-arrivals.png"}
              title={"New Arrivals"}
            />
          </Link>

          <Link to="/products?orderBy=hasOffer">
            <Circle
              srcImg={"/public/circles-images/offers.png"}
              title={"Offers"}
            />
          </Link>

          <Link to="/products?category=TVs">
            <Circle srcImg={"/public/circles-images/tvs.png"} title={"TVs"} />
          </Link>

          <Link to="/products?category=Laptops">
            <Circle
              srcImg={"/public/circles-images/laptops.png"}
              title={"Laptops"}
            />
          </Link>
          <Link to="/products?category=Mobiles">
            <Circle
              srcImg={"/public/circles-images/mobiles.png"}
              title={"Mobiles"}
            />
          </Link>
          <Link to="/products?category=Gaming">
            <Circle
              srcImg={"/public/circles-images/gaming.png"}
              title={"Gaming"}
            />
          </Link>
          <Link to="/products?category=Accessories">
            <Circle
              srcImg={"/public/circles-images/accessories.png"}
              title={"Accessories"}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Circles;
