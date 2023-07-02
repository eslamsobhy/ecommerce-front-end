
import { Link } from "react-router-dom";

const Mobile = () => {

    return ( <>
    <div className="flex  flex-row justify-between flex-wrap items-center">   
    <div  className="p-5 m-auto w-1/2"><Link to={"./Category"}> <img className="w-1/2 h-2/6"  src="../../public/apple-ar21.svg" alt="Iphone" ></img></Link></div>
    <div className="p-5 m-auto w-1/2"><Link to="./Category"> <img className="w-1/2 h-2/6"   src="../../public/samsung-ar21.svg" alt="Samsung" ></img></Link></div>
    <div className="p-5 m-auto w-1/2"><Link to="./Category"> <img className="w-1/2 h-2/6"   src="../../public/Nokia_wordmark.svg.png" alt="Nokia" ></img></Link></div>
    <div className="p-5 m-auto w-1/2"><Link to="./Category"> <img className="w-1/2 h-2/6"   src="../../public/OPPO_LOGO_2019.svg.png" alt="Oppo" ></img></Link></div>
    </div>
       </> );
}
 
export default Mobile;