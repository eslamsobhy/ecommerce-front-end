const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="bg-gray-200 text-white px-3 py-2 rounded-full fixed bottom-4 right-4"
      onClick={handleBackToTop}
    >
      <img
        className="w-5 h-5"
        src="../../public/up-arrow-svgrepo-com.svg"
      ></img>
    </button>
  );
};

export default BackToTopButton;
