import { Link } from "react-router-dom";
import logo from "../assets/Servify_Black_Logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [search, setSearch] = useState();
  const handleLogOut = () => {
    // localStorage.removeItem("access_token") ---- w-[600px] p-2 rounded-lg border-2 border-blue-400 focus:border-blue-500
  };

  const cart = useSelector((store) => store.cart.cart);

  return (
    <div className="w-full fixed z-10 bg-white border-2">
      <div className="w-10/12 mx-auto flex justify-between items-center p-7">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        <div>
          <input
            className="w-[600px] p-2 rounded-lg border-4 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search for Services"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <ul className="flex gap-x-5 items-center">
          <li className="font-semibold text-xl cursor-pointer border-2 flex items-center justify-center w-9 h-9 rounded-full">
            <i className="fa-solid fa-user"></i>
          </li>
          <li className="font-semibold text-xl cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl cursor-pointer">Services</li>
          <li className="font-semibold text-xl cursor-pointer relative">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
              <div className="text-white absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-500  flex items-center justify-center text-xs font-bold">
                {cart.length}
              </div>
            </Link>
          </li>
          <li className="font-semibold text-xl cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li
            className="font-semibold text-xl cursor-pointer"
            onClick={handleLogOut}
          >
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
