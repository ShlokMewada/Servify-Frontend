import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, viewService } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ serviceData, itemState }) => {
  const cartItems = useSelector((store) => store.cart.cart);
  const currentItem = cartItems.find(
    (item) => item.service_name === serviceData.service_name
  );
  const cartQuantity = currentItem ? currentItem.quantity : 0;
  const { service_pic, service_name, service_details, service_price } =
    serviceData;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToServiceDetails = () => {
    dispatch(viewService(serviceData));
    navigate("/servicedetails");
  };

  const handleAddToCart = () => {
    dispatch(addToCart(serviceData));
  };

  const handleAddMinus = (operation) => {
    if (operation) {
      dispatch(addToCart(serviceData));
    } else {
      dispatch(removeFromCart(service_name));
    }
  };

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
            cartQuantity === 0 ? (
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
                <span className="text-lg font-semibold">{cartQuantity}</span>
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
              <span className="text-lg font-semibold">{cartQuantity}</span>
              <button
                onClick={() => handleAddMinus(true)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          )}
          {itemState && (
            <button
              onClick={goToServiceDetails}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600 rounded-lg py-2 transition-all duration-200 flex items-center justify-center gap-x-2"
            >
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
