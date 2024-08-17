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
  const [nameErrorMsg, setNameErrorMsg] = useState();
  const [userNameErrorMsg, setUserNameErrorMsg] = useState();
  const [emailErrorMsg, setEmailErrorMsg] = useState();
  const [passwordErrorMsg, setPasswordErrorMsg] = useState();

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async (role) => {
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
              className="bg-blue-500 p-2 rounded-lg mx-auto w-2/3 hover:bg-blue-400 font-semibold text-lg"
              onClick={() => handleSubmit("user")}
            >
              Sign Up as User
            </button>
            <button
              className="bg-blue-500 p-2 rounded-lg mx-auto w-2/3 hover:bg-blue-400 font-semibold text-lg"
              onClick={() => handleSubmit("employee")}
            >
              Sign Up as Employee
            </button>
          </div>
        )}
        <div className="flex my-6 gap-x-1">
          {isSignIn ? <p>New to Servify?</p> : <p>Already a user?</p>}
          <div
            className="hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign Up now." : "Sign In now."}
          </div>
        </div>
        <div>
          <GoogleAuth />
        </div>
      </form>
    </div>
  );
};

export default Login;
