import React from "react";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const serviceInCart = useSelector((store) => store.cart);
  const viewService = useSelector((store) => store.service.viewService);

  const { image_url, name, description, price } = viewService;

  const serviceItem = serviceInCart.cart.filter(
    (service) => service.name === name
  )[0];

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="w-10/12 mx-auto min-h-screen py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Service Image */}
        <div className="flex flex-col space-y-8">
          <img
            src={image_url}
            alt={name}
            className="w-full h-56 object-cover rounded-lg shadow-md"
          />

          {/* Other Services Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Other Services
            </h2>
            <ul className="space-y-4">
              {["Repair", "Installation", "Maintenance", "Cleaning"].map(
                (service) => (
                  <li
                    key={service}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Washing Machine {service}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Column 2: Service Title and Description */}
        <div className="flex flex-col col-span-2 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{name}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Column 3: Cart Section */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
          {serviceItem ? (
            <>
              <ServiceCard
                key={serviceItem.name}
                serviceData={serviceItem}
                itemState={false}
              />
              <button
                className="bg-gray-800 text-white py-4 px-6 rounded-lg shadow-lg hover:bg-gray-900 transition mt-6 w-full text-lg font-semibold"
                onClick={goToCart}
              >
                Proceed to Checkout
              </button>
            </>
          ) : (
            <p className="text-lg font-medium text-gray-700">
              Your Cart is Empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
