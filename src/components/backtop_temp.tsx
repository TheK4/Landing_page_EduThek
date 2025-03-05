import { FaArrowCircleUp } from "react-icons/fa";

const BackTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-6 right-6 text-emerald-500 text-5xl cursor-pointer"
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default BackTop;
