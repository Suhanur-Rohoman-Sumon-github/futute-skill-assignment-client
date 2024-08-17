import { FaArrowRight } from "react-icons/fa";
const SerchingPage = () => {
  return (
    <div className="relative bg-cover bg-center h-80 flex items-center justify-center text-white bg-[#dadbf0]">
      <div className="text-center ">
        <h1 className="text-7xl font-bold text-[#112A46]">
          How can we help ??
        </h1>
        <div className="relative mt-4">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-16 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter text..."
          />
          <button className="absolute right-0 top-0 h-full px-4 text-black">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerchingPage;
