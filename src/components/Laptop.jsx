import { Link } from "react-router-dom";

const Laptop = () => {
  return (
    <>
    <div className="flex w-full align-left flex-row flex-wrap justify-start  ">   
  <div  className="p-5 m-auto w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/APPLE.png" alt="logo" /></Link></div>
  <div  className="p-5 m-auto w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/INFINX.png" alt="logo" /></Link></div>
  <div  className="p-5 m-auto w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/hp.png" alt="logo" />  </Link></div>
  <div  className="p-5 m-auto w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/Lenovo.png" alt="logo" />  </Link></div>
  <div  className="p-5 m-auto w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/LG.png" alt="logo" />  </Link></div>
  <div  className="p-5 m-auto w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/SONY.png" alt="logo" />  </Link></div>
  <div  className="p-5  w-1/3 flex items-center"><Link  className="flex items-center" to={"./Category"}>         <img className='w-20 ' src="../../public/DELL.png" alt="logo" />  </Link></div>

    </div>
    </>
  );
};

export default Laptop;
