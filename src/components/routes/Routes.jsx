import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddCoffee from "../pages/shared/AddCoffee/AddCoffee";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/addCoffee',
          element:<AddCoffee/>,

        }
      ]

    },
  ]);
  export default router;