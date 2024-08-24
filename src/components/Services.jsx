import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";
import CategoryCard from "./CategoryCard";
const Services = () => {
  //     const [data, setData] = useState([]);
  //     const getServices = async () => {
  //         await axios.get('https://api.example.com/data')
  //         .then(response => {
  //           setData(response.data);
  //         })
  //         .catch(error => {
  //           console.error('There was an error fetching the data!', error);
  //         });
  //     }
  //   useEffect(() => {
  //     getServices
  //   }, []);

  const services = [
    {
      service_pic:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1723539785207-9a3939.jpeg",
      service_name: "Bathroom Cleaning",
      service_details:
        "Hand Cleaning of all areas: toilet pot, tiles, basin, exhaust etc.",
      service_price: 499,
    },
    {
      service_pic:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652168690740-f5ed68.png",
      service_name: "AC Repair",
      service_details: "Repairing AC fully, adding new parts if needed.",
      service_price: 799,
    },
    {
      service_pic:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1723627720573-239e4e.jpeg",
      service_name: "Power Saver AC Service",
      service_details: "AC Repairing",
      service_price: 999,
    },
  ];

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-5xl text-center font-extrabold text-gray-800 mt-12">
        Our Services
      </h1>
      <div className="flex flex-col gap-y-6 mt-8">
        <h2 className="text-4xl font-bold text-gray-800">Categories</h2>
        <div className="flex">
          {services.map((category) => (
            <CategoryCard key={category.service_name} category={category} />
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-4xl font-bold text-gray-800">Category Name</h2>
          <div className="flex gap-x-4 mt-10">
            {services.map((service) => (
              <ServiceCard
                key={service.service_name}
                serviceData={service}
                itemState={true}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-4xl font-bold text-gray-800">Category Name</h2>
          <div className="flex gap-x-4 mt-10">
            {services.map((service) => (
              <ServiceCard
                key={service.service_name}
                serviceData={service}
                itemState={true}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-4xl font-bold text-gray-800">Category Name</h2>
          <div className="flex gap-x-4 mt-10">
            {services.map((service) => (
              <ServiceCard
                key={service.service_name}
                serviceData={service}
                itemState={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
