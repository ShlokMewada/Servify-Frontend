import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import ServiceDetails from "./components/ServiceDetails";
import CategoryDetails from "./components/CategoryDetails";
import Signup from "./components/Signup";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "user/login",
      element: <Login isEmployee={false} />,
    },
    {
      path: "user/signup",
      element: <Signup isEmployee={false} />,
    },
    {
      path: "employee/login",
      element: <Login isEmployee={true} />,
    },
    {
      path: "employee/signup",
      element: <Signup isEmployee={true} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/userprofile",
      element: <UserProfile />,
    },
    {
      path: "/servicedetails",
      element: <ServiceDetails />,
    },
    {
      path: "/categorydetails",
      element: <CategoryDetails />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
