const CartPage = () => {
  return (
    <div className="grid md:grid-cols-2 w-8/12 mx-auto mt-4">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md border ">
        <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
        <div className="border w-full  mt-4"></div>
        <p className="mt-4 text-gray-600">
          You have 3 items in your cart. Review your cart and proceed to
          checkout.
        </p>
      </div>
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
        <p className="mt-4 text-gray-600">
          You have 3 items in your cart. Review your cart and proceed to
          checkout.
        </p>
      </div>
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
        <p className="mt-4 text-gray-600">
          You have 3 items in your cart. Review your cart and proceed to
          checkout.
        </p>
      </div>
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
        <p className="mt-4 text-gray-600">
          You have 3 items in your cart. Review your cart and proceed to
          checkout.
        </p>
      </div>
    </div>
  );
};

export default CartPage;
