import logo from "../assets/Servify_Black_Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] w-full p-10 mt-24">
      <div className="w-10/12 mx-auto flex flex-col gap-y-10">
        <Link to="/">
          <img src={logo} alt="" className="w-32" />
        </Link>
        <div className="flex justify-between">
          <ul className="flex flex-col gap-y-1">
            <li className="text-lg font-bold mb-3">Company</li>
            <li className="text-gray-600 text-sm">About Us</li>
            <li className="text-gray-600 text-sm">Terms & Conditions</li>
            <li className="text-gray-600 text-sm">Privacy Policy</li>
          </ul>
          <ul className="flex flex-col gap-y-1">
            <li className="text-lg font-bold mb-3">For Customers</li>
            <li className="text-gray-600 text-sm">Categories near you</li>
            <li className="text-gray-600 text-sm">Contact Us</li>
          </ul>
          <ul className="flex flex-col gap-y-1">
            <li className="text-lg font-bold mb-3">For Partners</li>
            <li className="text-gray-600 text-sm">
              Register as a professional
            </li>
          </ul>
          <ul className="flex flex-col gap-y-1">
            <li className="text-lg font-bold mb-3">Social Links</li>
            <li>
              <ul className="flex gap-x-2">
                <li className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-gray-300 cursor-pointer">
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-gray-300 cursor-pointer">
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-gray-300 cursor-pointer">
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-gray-300 cursor-pointer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex items-baseline gap-x-1 mt-5">
          <i className="fa-regular fa-copyright fa-xs"></i>
          <p className="text-xs text-gray-600">
            Copyright 2024 Servify. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
