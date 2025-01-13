import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

var Body = () => {
    var appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/home",
          element: <Home />
        }
      ]);


     return (
        <RouterProvider router={appRouter}></RouterProvider>
     ) 
}

export default Body;