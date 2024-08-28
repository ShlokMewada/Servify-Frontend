import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Header from "./Header";
import Footer from "./Footer";

const CategoryDetails = () => {
  const category = useSelector((store) => store.service.viewServiceCategory);

  const { image_url, name, description, services } = category;

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto min-h-screen py-8 pt-44">
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-8 lg:space-y-0">
          {/* Column 1: Category Image */}
          <div className="flex flex-col space-y-6 lg:w-1/4 border-2 border-gray-300 p-3 rounded-lg">
            <img
              src={image_url}
              alt={name}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-sm text-gray-700">
                1. Book a service online
                <br />
                2. Our expert visits at your convenience
                <br />
                3. Get your appliance fixed or maintained
              </p>
            </div>
          </div>

          {/* Column 2: Service List */}
          <div className="flex flex-col space-y-4 w-9/12 border-2 border-gray-300 p-3 rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              {name} Services
            </h1>
            <div className="flex flex-wrap gap-4">
              {services.map((serviceItems) => (
                <ServiceCard
                  key={serviceItems.id}
                  serviceData={serviceItems}
                  itemState={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryDetails;
