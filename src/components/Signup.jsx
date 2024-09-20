import axiosInstance from "../utils/axiosInstance";
import { useRef, useState } from "react";
import { checkValidDataSignUp } from "../utils/validate";
import GoogleAuth from "./GoogleAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signup = ({ isEmployee }) => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const address = useRef();
  const [firstNameErrorMsg, setFirstNameErrorMsg] = useState();
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState();
  const [userNameErrorMsg, setUserNameErrorMsg] = useState();
  const [emailErrorMsg, setEmailErrorMsg] = useState();
  const [passwordErrorMsg, setPasswordErrorMsg] = useState();
  const [addressErrorMsg, setAddressErrorMsg] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const navigateToSignInUser = () => {
    navigate("../login");
  };

  const navigateToSignInEmployee = () => {
    navigate("../employee/login");
  };

  const handleSubmit = async () => {
    // console.log(role); <<Role Check Console Log>>

    const message = checkValidDataSignUp(
      firstName.current.value,
      lastName.current.value,
      username.current.value,
      email.current.value,
      password.current.value
    );

    const addressMsg = address.current.value ? "" : "Address required!";

    setFirstNameErrorMsg(message.firstNameMsg);
    setLastNameErrorMsg(message.lastNameMsg);
    setUserNameErrorMsg(message.usernameMsg);
    setEmailErrorMsg(message.emailMsg);
    setPasswordErrorMsg(message.passwordMsg);
    setAddressErrorMsg(addressMsg);

    if (
      message.firstNameMsg !== "" ||
      message.lastNameMsg !== "" ||
      message.usernameMsg !== "" ||
      message.emailMsg !== "" ||
      message.passwordMsg !== "" ||
      addressMsg !== ""
    ) {
      return;
    }

    const formData = new FormData();
    formData.append("username", username.current.value);
    formData.append("email", email.current.value);
    formData.append("password", password.current.value);
    formData.append("first_name", firstName.current.value);
    formData.append("last_name", lastName.current.value);
    formData.append("address", address.current.value);
    console.log(formData);
    await axiosInstance
      .post(
        `http://localhost:8000/signup/${!isEmployee ? "user" : "employee"}/`,
        formData
      )
      .then((response) => {
        console.log(response.data);
        dispatch(addUser(isEmployee));
        toast.success("Successfully Signed Up!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!, please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 md:py-10">
      <form
        className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Sign Up
        </h2>

        <div className="flex gap-x-2">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstname"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              type="text"
              placeholder="Enter First Name"
              ref={firstName}
            />
            {firstNameErrorMsg && (
              <p className="mt-2 text-sm text-red-600">{firstNameErrorMsg}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastname"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              type="text"
              placeholder="Enter Last Name"
              ref={lastName}
            />
            {lastNameErrorMsg && (
              <p className="mt-2 text-sm text-red-600">{lastNameErrorMsg}</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            type="text"
            placeholder="Enter Username"
            ref={username}
          />
          {userNameErrorMsg && (
            <p className="mt-2 text-sm text-red-600">{userNameErrorMsg}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            type="text"
            placeholder="Enter Email"
            ref={email}
          />
          {emailErrorMsg && (
            <p className="mt-2 text-sm text-red-600">{emailErrorMsg}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            type="password"
            placeholder="Enter Password"
            ref={password}
          />
          {passwordErrorMsg && (
            <p className="mt-2 text-sm text-red-600">{passwordErrorMsg}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            type="text"
            placeholder="Enter Address"
            ref={address}
          />
          {addressErrorMsg && (
            <p className="mt-2 text-sm text-red-600">{addressErrorMsg}</p>
          )}
        </div>

        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <div className="flex flex-col items-center gap-y-2">
          <p className="text-sm font-medium text-gray-700">
            Sign Up Using Google
          </p>
          <GoogleAuth isSignIn={false} role={false} />
        </div>

        {!isEmployee ? (
          <div className="flex justify-center gap-x-1 text-sm">
            <p className="text-gray-600">Already a user</p>
            <button
              className="font-medium text-gray-800 hover:text-gray-600"
              onClick={navigateToSignInUser}
            >
              Sign In now.
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-x-1 text-sm">
            <p className="text-gray-600">Already a employee?</p>
            <button
              className="font-medium text-gray-800 hover:text-gray-600"
              onClick={navigateToSignInEmployee}
            >
              Sign In now.
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
