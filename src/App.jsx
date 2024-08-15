import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";

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
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
