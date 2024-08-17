import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GoogleAuth() {
  const navigate = useNavigate();
  const [role, setRole] = useState("User");
  const [errors, setErrors] = useState(null);

  const sendTokenToBackend = async (idToken) => {
    try {
      const response = await axios.post("https://api.example.com/signin", {
        id_token: idToken,
        role,
      });
      console.log(response.data);

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.tokens.access);
        localStorage.setItem("user", JSON.stringify(data.user));
        const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin");
        console.log("Login successful");
        navigate(redirectPath);
      } else {
        throw new Error("Failed to login with Google");
      }
    } catch (error) {
      console.error("Error sending token to backend:", error);
      setErrors("Failed to login. Please try again.");
    }
  };

  return (
    <div className="App">
      <p className="" style={{ marginLeft: "190px" }}>
        Select Your Role:
      </p>
      <div className="">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-gray-700"
        >
          <option value="User">User</option>
          <option value="Employee">Employee</option>
        </select>
      </div>
      <p className="google">SignIn Using Google:</p>
      <div className="googleauth">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const credential = credentialResponse.credential;
            if (credential) {
              try {
                const decoded = jwtDecode(credential);
                console.log(decoded);
                sendTokenToBackend(credential);
              } catch (error) {
                console.error("Error decoding token:", error);
                setErrors("Error processing login. Please try again.");
              }
            } else {
              console.error("No credential returned from Google");
              setErrors("No credential returned. Please try again.");
            }
          }}
          onError={() => {
            console.log("Login Failed");
            setErrors("Login failed. Please try again.");
          }}
        />
        {errors && <span className="error">{errors}</span>}
      </div>
    </div>
  );
}

export default GoogleAuth;
