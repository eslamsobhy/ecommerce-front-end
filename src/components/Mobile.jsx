import { FaApple } from "react-icons/fa";
import { SiSamsung, SiXiaomi, SiHuawei } from "react-icons/si";
import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <>
      <div className="flex w-full align-left flex-row flex-wrap justify-start  ">
        <div className="p-5 m-auto w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              Apple
            </span>{" "}
            <FaApple size={40} />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              SAMSUNG
            </span>{" "}
            <SiSamsung size={50} />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              OPPO
            </span>{" "}
            <img className="w-5 " src="/OPPO.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              HUAWEI
            </span>{" "}
            <SiHuawei size={40} />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              HONOR
            </span>{" "}
            <img className="w-5 " src="/HONOR.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5 m-auto w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              INFINIX
            </span>{" "}
            <img className="w-5 " src="/INFINX.png" alt="logo" />{" "}
          </Link>
        </div>
        <div className="p-5 m w-1/2 flex items-center">
          <Link className="flex items-center" to={"./Category"}>
            {" "}
            <span className="mr-2 uppercase font-bold tracking-wider">
              XIAOMI
            </span>{" "}
            <SiXiaomi size={35} />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mobile;
