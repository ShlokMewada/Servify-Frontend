import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let totalPrice = 0;

  // Calculate the total price
  cart.forEach((service) => {
    totalPrice += service.price * service.quantity;
  });

  // Format the total price for display
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>
      <h1 className="text-5xl text-center font-extrabold text-gray-800 mt-28">
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-6 justify-center mt-12 w-10/12 bg-gray-50 p-8 shadow-lg mx-auto rounded-lg">
            {cart.map((service) => (
              <ServiceCard
                key={service.id}
                serviceData={service}
                itemState={false}
              />
            ))}
          </div>

          <div className="flex flex-col flex-grow w-10/12 mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              {cart.map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="text-lg font-medium text-gray-700">
                    {service.name}{" "}
                    <span className="text-sm text-gray-500">
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                    <span className="text-md text-gray-500">
                      {service.quantity}
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-indigo-600">
                    ₹{(service.price * service.quantity).toFixed(2)}
                  </span>
                  {/* <p className="hidden">
                      {(totalPrice += service.price * service.quantity)}
                    </p> */}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <span className="text-xl font-bold text-gray-800">
                Total Price:
              </span>
              <div>
                <span className="text-xl font-extrabold text-green-600">
                  ₹{formattedTotalPrice}
                </span>
                <button className="ml-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200">
                  Purchase
                </button>
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
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-xl text-gray-500 mt-10 text-center">
            Your cart is empty.
          </p>
          <button className="bg-black rounded-lg text-white hover:bg-opacity-80 px-8 py-2">
            <Link to="/">Home</Link>
          </button>
        </div>
      )}
      <div className="bottom-0 left-0 right-0 -mb-12">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
