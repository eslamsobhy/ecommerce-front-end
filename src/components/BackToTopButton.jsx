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
// import { MdOutlineKeyboardArrowUp } from "react-icons/md"
// const BackToTopButton = () => {
//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
// return (
//   <button
//     className="bg-gray-200 text-white px-3 py-2 rounded-full fixed bottom-4 right-4"
//     onClick={handleBackToTop}
//   >
//     <img
//       className="w-5 h-5"
//       src="../../public/up-arrow-svgrepo-com.svg"
//     ></img>
//   </button>
// );
//};

export default BackToTopButton;


