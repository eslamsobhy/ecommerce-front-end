import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowButton(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyles = {
    opacity: showButton ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
    cursor: showButton ? "pointer" : "default"
  };




  return (
    <button
      className="bg-[#555555] text-white font-bold text-xl px-3 py-2 rounded-t fixed z-10 bottom-0 right-0 transion hid"
      onClick={handleBackToTop}
      style={buttonStyles}
    >
      <MdOutlineKeyboardArrowUp />
    </button>
  );
};

export default BackToTopButton;
// import { useState, useEffect } from "react";

// const BackToTopButton = () => {
//   const [btnVisibility, setBtnVisibility] = useState(false);

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       if (scrollTop > 0) {
//         setBtnVisibility(true);
//       } else {
//         setBtnVisibility(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {btnVisibility && (
//         <button
//           className="bg-gray-200 z-999999 text-white px-3 py-2 rounded-full hover:bg-f37020 fixed bottom-4 right-4"
//           onClick={handleBackToTop}
//         >
//           <img className="w-5 h-5" src="../../public/up-arrow-svgrepo-com.svg" alt="Back to Top"></img>
//         </button>
//       )}
//     </>
//   );
// };

// export default BackToTopButton;

