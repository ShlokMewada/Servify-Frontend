import ServiceCard from "./ServiceCard";
import CategoryCard from "./CategoryCard";
import useServiceCategory from "../hooks/useServiceCategory";
import { useSelector } from "react-redux";
const Services = () => {
  useServiceCategory();

  const services = useSelector((store) => store.service.services);

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-5xl text-center font-extrabold text-gray-800 mt-12">
        Our Services
      </h1>
      <div className="flex flex-col gap-y-6 mt-8">
        <h2 className="text-4xl font-bold text-gray-800">Categories</h2>
        <div className="flex">
          {services?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        {services?.map((service) => (
          <div className="mt-8" key={service.id}>
            <h2 className="text-4xl font-bold text-gray-800">{service.name}</h2>
            <div className="flex gap-x-4 mt-10">
              {service.services.map((serviceItems) => (
                <ServiceCard
                  key={serviceItems.id}
                  serviceData={serviceItems}
                  itemState={true}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
