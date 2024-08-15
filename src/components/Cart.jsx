// import { useSelector } from "react-redux";
// import ServiceCard from "./ServiceCard";

// const Cart = () => {
//   const cart = useSelector((store) => store.cart.cart);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <h1 className="text-5xl text-center font-extrabold text-gray-800 mt-12">
//         Your Cart
//       </h1>
//       {cart.length > 0 ? (
//         <>
//           <div className="flex flex-wrap gap-6 justify-center mt-12 px-6">
//             {cart.map((service) => (
//               <ServiceCard
//                 key={service.service_name}
//                 serviceData={service}
//                 itemState={false}
//               />
//             ))}
//           </div>
//           <button className="">Clear Cart</button>
//         </>
//       ) : (
//         <p className="text-xl text-gray-500 mt-10">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
