import axios from "axios";
import { useRef, useState } from "react";
import { checkValidDataSignUp, checkValidDataSignIn } from "../utils/validate";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [role, setRole] = useState("User");
  const [nameErrorMsg, setNameErrorMsg] = useState();
  const [userNameErrorMsg, setUserNameErrorMsg] = useState();
  const [emailErrorMsg, setEmailErrorMsg] = useState();
  const [passwordErrorMsg, setPasswordErrorMsg] = useState();

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async () => {
    // console.log(role); <<Role Check Console Log>>
    if (!isSignIn) {
      const message = checkValidDataSignUp(
        name.current.value,
        username.current.value,
        email.current.value,
        password.current.value
      );

      setNameErrorMsg(message.nameMsg);
      setUserNameErrorMsg(message.usernameMsg);
      setEmailErrorMsg(message.emailMsg);
      setPasswordErrorMsg(message.passwordMsg);

      if (
        message.nameMsg !== "" ||
        message.usernameMsg !== "" ||
        message.emailMsg !== "" ||
        message.passwordMsg !== ""
      ) {
        return;
      }
    } else {
      const message = checkValidDataSignIn(
        email.current.value,
        password.current.value
      );

      setEmailErrorMsg(message.emailMsg);
      setPasswordErrorMsg(message.passwordMsg);

      if (message.emailMsg !== "" || message.passwordMsg !== "") {
        return;
      }
    }

    // if (!isSignIn) {
    //   const credentials = {
    //     name: name.current.value,
    //     email: email.current.value,
    //     password: password.current.value,
    //     role: role,
    //   };
    //   try {
    //     const response = await axios.post(
    //       "https://api.example.com/signup",
    //       credentials
    //     );
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error("There was an error during sign-up!", error);
    //   }
    // } else {
    //   const credentials = {
    //     email: email.current.value,
    //     password: password.current.value,
    //   };
    //   try {
    //     const response = await axios.post(
    //       "https://api.example.com/signin",
    //       credentials
    //     );
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error("There was an error during sign-in!", error);
    //   }
    // }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <form
        className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignIn && (
          <>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                type="text"
                placeholder="Enter Name"
                ref={name}
              />
              {nameErrorMsg && (
                <p className="mt-2 text-sm text-red-600">{nameErrorMsg}</p>
              )}
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
          </>
        )}

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

        <div className="flex items-center gap-x-5">
          <p className="text-sm font-medium text-gray-700">
            {isSignIn ? "Sign In as:" : "Sign Up as:"}
          </p>
          <label className="flex items-center cursor-pointer gap-x-2">
            <span className="text-sm font-medium text-gray-700">User:</span>
            <input
              type="radio"
              name="role"
              value="User"
              onChange={() => setRole("User")}
              defaultChecked
              className="form-radio h-4 w-4 text-gray-600"
            />
          </label>
          <label className="flex items-center cursor-pointer gap-x-2">
            <span className="text-sm font-medium text-gray-700">Employee:</span>
            <input
              type="radio"
              name="role"
              value="Employee"
              onChange={() => setRole("Employee")}
              className="form-radio h-4 w-4 text-gray-600"
            />
          </label>
        </div>

        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex flex-col items-center gap-y-2">
          <p className="text-sm font-medium text-gray-700">
            {isSignIn ? "Sign In Using Google:" : "Sign Up Using Google:"}
          </p>
          <GoogleAuth isSignIn={isSignIn} role={role} />
        </div>

        <div className="flex justify-center gap-x-1 text-sm">
          <p className="text-gray-600">
            {isSignIn ? "New to Servify?" : "Already a user?"}
          </p>
          <button
            className="font-medium text-gray-800 hover:text-gray-600"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign Up now." : "Sign In now."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
