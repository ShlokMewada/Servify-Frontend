import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cart);

  const orderPlaceServices = cart.map(({ id, quantity }) => ({ id, quantity }));

  const [paymentStatus, setPaymentStatus] = useState("Pending");

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

  const handlePayment = async () => {
    await axiosInstance
      .post("http://localhost:8000/payment/", { formattedTotalPrice })
      .then(async (response) => {
        const { order_id, status } = response.data;
        setPaymentStatus(status);
        if (!order_id) {
          throw new Error("Order ID not received from backend.");
        }

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY, // Enter your Razorpay Key ID
          amount: formattedTotalPrice, // Amount in paise (formattedTotalPrice is in rupees)
          currency: "INR",
          name: "Servify",
          description: "Transaction",
          order_id: order_id,
          handler: function (response) {
            // alert(`Payment ID: ${response.razorpay_payment_id}`);
            // alert(`Order ID: ${response.razorpay_order_id}`);
            // alert(`Signature: ${response.razorpay_signature}`);
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();

        await axiosInstance
          .post("http://localhost:8000/place-order/", {
            services: orderPlaceServices,
          })
          .then((response) => {
            dispatch(clearCart());
            toast.success("Order Placed !");
          })
          .catch((error) => {
            toast.error("There was an error while placing order!");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cashOnDelivery = async () => {
    await axiosInstance
      .post("http://localhost:8000/place-order/", {
        services: orderPlaceServices,
      })
      .then((response) => {
        dispatch(clearCart());
        toast.success("Order Placed !");
      })
      .catch((error) => {
        toast.error("There was an error while placing order!");
      });
  };

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
                </div>
              ))}
              <div className="flex justify-end gap-x-10 items-center">
                <span className="text-lg font-medium text-gray-700">
                  Total Price:
                </span>
                <span className="text-lg font-semibold text-indigo-600">
                  ₹{formattedTotalPrice}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <span className="text-xl font-bold text-gray-800">
                Total Price With GST:
              </span>
              <div>
                <span className="text-xl font-extrabold text-green-600">
                  ₹{formattedTotalPrice * 1.18}
                </span>

                <button
                  id="rzp-button1"
                  onClick={handlePayment}
                  className="ml-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Pay with Razorpay
                </button>
                <button
                  className="ml-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={cashOnDelivery}
                >
                  Cash On Delivery
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
