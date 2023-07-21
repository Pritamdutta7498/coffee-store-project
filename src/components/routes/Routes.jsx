import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddCoffee from "../pages/shared/AddCoffee/AddCoffee";
import CoffeeData from "../pages/shared/CoffeeData/CoffeeData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),

      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path:'coffeeData',
        element:<CoffeeData/>,
        loader: () => fetch("http://localhost:5000/coffee"),


      }
    ],
  },
]);
export default router;
