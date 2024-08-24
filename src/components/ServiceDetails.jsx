import React from "react";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";

const ServiceDetails = () => {
  const service = useSelector((store) => store.cart);

  const { service_pic, service_name, service_details, service_price } =
    service.viewService;

  const serviceItem = service.cart.filter(
    (service) => service.service_name === service_name
  )[0];

  return (
    <div className="w-10/12 mx-auto bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-0">
      <div className="w-full h-full p-10 bg-white">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1: Service Image */}
          <div className="flex flex-col space-y-8">
            <img
              src={service_pic} // Replace with actual image URL
              alt="Washing Machine"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />

            {/* Other Services Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Other Services
              </h2>
              <ul className="space-y-4">
                {["Repair", "Installation", "Maintenance", "Cleaning"].map(
                  (service) => (
                    <li
                      key={service}
                      className="p-5 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer text-lg font-medium text-gray-800"
                    >
                      Washing Machine {service}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Column 2: Service Title and Description */}
          <div className="flex flex-col col-span-2 space-y-4">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
              {service_name}
            </h1>
            <p className="text-gray-700 text-lg">{service_details}</p>
          </div>

          {/* Column 3: Cart Section */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Cart
            </h2>
            {serviceItem ? (
              <>
                <ServiceCard
                  key={serviceItem.service_name}
                  serviceData={serviceItem}
                  itemState={false}
                />
                <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition mt-4 w-full">
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <p className="text-lg font-semibold text-gray-800">
                Your Cart is Empty
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
