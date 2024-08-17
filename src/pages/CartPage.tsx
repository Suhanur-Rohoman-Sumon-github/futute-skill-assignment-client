import { TCards, useGetAllCardsQuery } from "../redux/fetures/card/card.api";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

const CartPage = () => {
  const { title } = useAppSelector((state: RootState) => state.cards);
  const { data } = useGetAllCardsQuery(title);

  console.log(data?.data);
  return (
    <div className="grid md:grid-cols-2 w-8/12 mx-auto mt-4 gap-4">
      {data?.data.map((data: TCards) => (
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md border ">
          <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
          <div className="border w-full  mt-4"></div>
          <p className="mt-4 text-gray-600">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
