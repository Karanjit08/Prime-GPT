import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Welcome from "./Welcome";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/Firebase";


var Body = () => {
  var dispatch = useDispatch();
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


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {accesToken,email,uid} = user;
        dispatch(setUser({
          accesToken: accesToken,
          email: email,
          uid: uid
        }));
      } else {
        dispatch(clearUser());
      }
    });
  },[]);


     return (
        <RouterProvider router={appRouter}></RouterProvider>
     ) 
}

export default Body;