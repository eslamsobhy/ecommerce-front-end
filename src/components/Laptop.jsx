import { Link } from "react-router-dom";

const Laptop = () => {
  return (
    <>
      <div className="flex max-h-fit flex-row justify-between flex-wrap items-center">
        <div className="p-5 m-auto  w-1/2">
          <Link to={"./Category"}>
            {" "}
            <img
              className="w-1/2 h-14"
              src="../../public/HP_New_Logo_2D.svg.png"
              alt="HP"
            ></img>
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2">
          <Link to="./Category">
            {" "}
            <img
              className="w-1/2 "
              src="../../public/Lenovo-Logo.svg.png"
              alt="Lenovo"
            ></img>
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2">
          <Link to="./Category">
            {" "}
            <img
              className="w-1/2 "
              src="../../public/Dell_logo.svg.png"
              alt="Dell"
            ></img>
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2">
          <Link to="./Category">
            {" "}
            <img
              className="w-1/2 "
              src="../../public/apple-ar21.svg"
              alt="Mac"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Laptop;
