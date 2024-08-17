import { FaArrowRight } from "react-icons/fa";
import { useAppDispatch } from "../redux/hook";
import { sercheableField } from "../redux/fetures/card/card.slice";
import { ChangeEvent, useState } from "react";

const SerchingPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  // Handle input changes and dispatch updates
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(sercheableField(value));
  };

  const handleSubmit = () => {
    dispatch(sercheableField(inputValue));
  };

  return (
    <div className="relative bg-cover bg-center h-80 flex items-center justify-center text-white bg-[#dadbf0]">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#112A46]">
          How can we help ??
        </h1>
        <div className="relative mt-8">
          <input
            type="text"
            className="w-full text-black py-2 pl-4 pr-16 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter text..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSubmit}
            className="absolute right-0 top-0 h-full px-4 text-black"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerchingPage;
