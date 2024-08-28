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
import { Toaster } from "react-hot-toast";
import {
  EmployeeProtectedRoute,
  UserProtectedRoute,
  AuthenticatedRoute,
} from "./utils/ProtectedRoute";
import Employee from "./components/Employee";
import User from "./components/User";
import Unauthorized from "./components/Unauthorized";
import { useEffect } from "react";
import useServiceCategory from "./hooks/useServiceCategory";
import useService from "./hooks/useService";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <User />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          element: <AuthenticatedRoute />,
          children: [
            {
              path: "/login",
              element: <Login isEmployee={false} />,
            },
            {
              path: "/signup",
              element: <Signup isEmployee={false} />,
            },
          ],
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
          path: "/servicedetails",
          element: <ServiceDetails />,
        },
        {
          path: "/categorydetails",
          element: <CategoryDetails />,
        },
        {
          element: <UserProtectedRoute />,
          children: [
            {
              path: "/cart",
              element: <Cart />,
            },
            {
              path: "/userprofile",
              element: <UserProfile />,
            },
          ],
        },
      ],
    },
    {
      path: "/employee",
      element: <EmployeeProtectedRoute />,
      children: [
        {
          element: <Employee />,
          children: [
            {
              element: <AuthenticatedRoute />,
              children: [
                {
                  path: "login",
                  element: <Login isEmployee={true} />,
                },
                {
                  path: "signup",
                  element: <Signup isEmployee={true} />,
                },
              ],
            },
          ],
        },
        {
          element: <EmployeeProtectedRoute />,
          children: [
            // Add employee-specific routes here
            // For example:
            // { path: "dashboard", element: <EmployeeDashboard /> },
          ],
        },
      ],
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
  ]);

  useServiceCategory();
  useService();

  return (
    <div>
      <Toaster />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
