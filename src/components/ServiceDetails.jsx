import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const viewService = useSelector((store) => store.service.viewService);
  const navigate = useNavigate();
  const { image_url, name, description, price } = viewService;

  const descriptionParts = description
    .split(/\d\./)
    .map((part) => part.trim())
    .filter(Boolean);

  const goToCart = () => {
    navigate("/cart");
  };

  // Dummy review data - now an array of reviews
  const dummyReviews = [
    {
      userName: "John Doe",
      rating: 4.5,
      date: "May 15, 2023",
      comment:
        "Great service! The technician was very professional and fixed my washing machine quickly. I'm very satisfied with the results.",
    },
    {
      userName: "Jane Smith",
      rating: 5,
      date: "May 20, 2023",
      comment:
        "Excellent service! The technician arrived on time and did a thorough job. My dishwasher works like new now.",
    },
    // Add more reviews as needed
  ];

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto min-h-screen py-8 pt-44">
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-8 lg:space-y-0">
          {/* Column 1: Service Image */}
          <div className="flex flex-col space-y-6 lg:w-1/4 border-2 border-gray-300 p-3 rounded-lg">
            <img
              src={image_url}
              alt={name}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            {/* Other Services Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Other Services
              </h2>
              <ul className="space-y-3">
                {["Repair", "Installation", "Maintenance", "Cleaning"].map(
                  (service) => (
                    <li
                      key={service}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      Washing Machine {service}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Column 2: Service Title and Description */}
          <div className="flex flex-col space-y-4 lg:w-2/5 border-2 border-gray-300 p-3 rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
              {name}
            </h1>
            <div className="overflow-y-auto max-h-[350px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {descriptionParts.map((part, index) => (
                <p
                  className="text-gray-600 text-base leading-relaxed mb-3"
                  key={index}
                >
                  {index + 1}. {part}
                </p>
              ))}
            </div>
          </div>

          {/* Column 3: Reviews Section */}
          <div className="flex flex-col space-y-4 lg:w-1/3 border-2 border-gray-300 p-3 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="overflow-y-auto max-h-[350px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {dummyReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md w-full mb-4 last:mb-0"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-base font-semibold text-gray-800">
                      {review.userName}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(review.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          size={16}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{review.date}</p>
                  <p className="text-sm text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
