import axios from "axios";
import { useRef, useState } from "react";
import { checkValidDataSignUp, checkValidDataSignIn } from "../utils/validate";
import GoogleAuth from "./GoogleAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
    <div>
      <form
        className="w-4/12 absolute p-10 bg-black bg-opacity-80 flex flex-col gap-y-5 mt-20 mx-auto right-0 left-0 text-white justify-center rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {!isSignIn && (
          <>
            <input
              className="p-2 w-full bg-gray-700 rounded-lg"
              type="text"
              placeholder="Enter Name"
              ref={name}
            />
            <p className="text-red-400">{nameErrorMsg}</p>
            <input
              className="p-2 w-full bg-gray-700 rounded-lg"
              type="text"
              placeholder="Enter Username"
              ref={username}
            />
            <p className="text-red-400">{userNameErrorMsg}</p>
          </>
        )}

        <input
          className="p-2 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Enter Email"
          ref={email}
        />
        <p className="text-red-400">{emailErrorMsg}</p>
        <input
          className="p-2 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Enter Password"
          ref={password}
        />
        <p className="text-red-400">{passwordErrorMsg}</p>
        <div className="flex items-center gap-x-5">
          <p className="text-lg font-semibold">
            {isSignIn ? "SignIn as:" : "SignUp as:"}
          </p>
          <label className="flex items-center cursor-pointer gap-x-2">
            <span className="text-lg font-semibold">User:</span>
            <input
              type="radio"
              name="role"
              value="User"
              onChange={() => {
                setRole("User");
              }}
              defaultChecked
              className="form-radio h-5 w-5 text-indigo-600"
            />
          </label>

          <label className="flex items-center cursor-pointer gap-x-2">
            <span className="text-lg font-semibold">Employee:</span>
            <input
              type="radio"
              name="role"
              value="Employee"
              onClick={() => {
                setRole("Employee");
              }}
              className="form-radio h-5 w-5 text-indigo-600"
            />
          </label>
        </div>
        {isSignIn ? (
          <button
            className="bg-blue-500 p-2 rounded-lg mx-auto w-1/3 hover:bg-blue-400 font-semibold text-lg"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        ) : (
          <div className="flex gap-x-5">
            <button
              className="bg-blue-500 p-2 rounded-lg mx-auto w-1/3 hover:bg-blue-400 font-semibold text-lg"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        )}
        <div className="flex flex-col gap-y-2 items-center">
          <p className="font-semibold">
            {isSignIn ? "SignIn Using Google:" : "SignUp Using Google:"}
          </p>
          <GoogleAuth isSignIn={isSignIn} role={role} />
        </div>
        <div className="flex my-6 gap-x-1">
          <p className="font-semibold">
            {isSignIn ? "New to Servify?" : "Already a user?"}
          </p>
          <div
            className="hover:underline cursor-pointer font-semibold"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign Up now." : "Sign In now."}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
