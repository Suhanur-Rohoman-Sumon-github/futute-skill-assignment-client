import { useState } from "react";
import Modal from "../../componnets/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="  p-4 bg-black text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-bold ">Abstract | Help center</h1>
        </div>
        <div>
          <button
            onClick={openModal}
            className="px-8 py-2 border border-white rounded-md bg-[#1a1a1a]"
          >
            Submit a request
          </button>
          <Modal isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
