import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const CategoryDetails = () => {
  const category = useSelector((store) => store.service.viewServiceCategory);

  const { image_url, name, description, services } = category;

  const navigate = useNavigate();

  return (
    <div className="w-10/12 mx-auto min-h-screen py-8">
      <div className="flex flex-col gap-y-16">
        <div className="flex gap-10">
          <div className="">
            <img
              src={image_url}
              alt={name}
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col col-span-2 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              {name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-center gap-x-10">
            <h2 className="text-4xl font-bold text-gray-800">Services</h2>
          </div>
          <div className="flex gap-x-4">
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
  );
};

export default CategoryDetails;
