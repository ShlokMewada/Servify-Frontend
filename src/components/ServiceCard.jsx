import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { useState } from "react";

const ServiceCard = ({ serviceData, itemState }) => {
  const {
    service_pic,
    service_name,
    service_details,
    service_price,
    quantity,
  } = serviceData;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(serviceData));
    setCountAdd(countAdd + 1);
  };

  const handleAddMinus = (operation) => {
    if (operation) {
      dispatch(addToCart(serviceData));
      setCountAdd(countAdd + 1);
    } else {
      dispatch(removeFromCart(service_name));
      setCountAdd(countAdd - 1);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(service_name));
  };

  const [countAdd, setCountAdd] = useState(0);

  return (
    <div className="w-[280px] flex flex-col justify-between border-2 border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-t-lg overflow-hidden">
        <img
          src={service_pic}
          alt={service_name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-2 p-4">
        <h1 className="text-lg font-semibold text-gray-800 min-h-[50px] flex items-center">
          {service_name}
        </h1>
        <p className="text-sm text-gray-600">{service_details}</p>
        <p className="text-md font-bold text-indigo-600">₹{service_price}</p>
        <div className="flex gap-x-2 mt-4">
          {itemState ? (
            countAdd === 0 ? (
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white border-2 border-green-500 hover:border-green-600 rounded-lg py-2 transition-all duration-200 flex items-center justify-center gap-x-2"
              >
                Add<i className="fa-solid fa-plus"></i>
              </button>
            ) : (
              <div className="flex items-center gap-x-2">
                <button
                  onClick={() => handleAddMinus(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="text-lg font-semibold">{countAdd}</span>
                <button
                  onClick={() => handleAddMinus(true)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            )
          ) : (
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => handleAddMinus(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => handleAddMinus(true)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
