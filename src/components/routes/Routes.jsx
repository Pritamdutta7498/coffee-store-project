import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddCoffee from "../pages/shared/AddCoffee/AddCoffee";
import CoffeeData from "../pages/shared/CoffeeData/CoffeeData";
import UpdateCoffee from "../pages/shared/UpdateCoffee/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },

      {
        path: "coffeeData",
        element: <CoffeeData />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);
export default router;
