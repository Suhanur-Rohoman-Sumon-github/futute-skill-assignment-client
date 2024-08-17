import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateNewCardsMutation } from "../redux/fetures/card/card.api";
import { v4 as uuidv4 } from "uuid";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface FormData {
  cardTitle: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [createNewCard] = useCreateNewCardsMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const id = uuidv4();
    const { cardTitle, description } = data;
    const newCard = { id, title: cardTitle, description };
    createNewCard(newCard);
    closeModal();
    reset();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Card</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Card Title
                </label>
                <input
                  type="text"
                  {...register("cardTitle", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
                  placeholder="Enter card title"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
