import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Welcome from "./Welcome";

var Body = () => {
    var appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Welcome />
        },
        {
          path: "/login",
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