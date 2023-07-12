import { Link } from "react-router-dom";

const Laptop = () => {
  return (
    <>
      <div className="flex w-full align-left flex-row flex-wrap justify-start  ">
        <div className="p-5 m-auto w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/APPLE.png" alt="logo" />
          </Link>
        </div>
        <div className="p-5 m-auto w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/INFINX.png" alt="logo" />
          </Link>
        </div>
        <div className="p-5 m-auto w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/hp.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/Lenovo.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/LG.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/SONY.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5  w-1/3 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <img className="w-20 " src="/DELL.png" alt="logo" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Laptop;
