import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let totalPrice = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-5xl text-center font-extrabold text-gray-800 mt-12">
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-6 justify-center mt-12 px-6">
            {cart.map((service) => (
              <ServiceCard
                key={service.service_name}
                serviceData={service}
                itemState={false}
              />
            ))}
          </div>

          <div className="flex items-center w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
            <div className="flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                {cart.map((service) => (
                  <div
                    key={service.service_name}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="text-lg font-medium text-gray-700">
                      {service.service_name}{" "}
                      <span className="text-sm text-gray-500">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                      <span className="text-md text-gray-500">
                        {service.quantity}
                      </span>
                    </span>
                    <span className="text-lg font-semibold text-indigo-600">
                      ₹{service.service_price * service.quantity}
                    </span>
                    <p className="hidden">
                      {(totalPrice += service.service_price * service.quantity)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6 pt-4 border-t">
                <span className="text-xl font-bold text-gray-800">
                  Total Price:
                </span>
                <div>
                  <span className="text-xl font-extrabold text-green-600">
                    ₹{totalPrice}
                  </span>
                  <button className="ml-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-xl text-gray-500 mt-10 text-center">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default Cart;
