import React from "react";
import  ReactDOM  from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Mainlayout } from "./layout";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { Homescreen } from "./screens/Home";
const darkTheme = createTheme({
  palette: {
    mode:"light",
          text: {
            primary: "#162123",
            secondary: "#154234",
          },
        }
});


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children:[{
        path:"/",
        element:<Homescreen/>
      }]
  },
  {
    path:"/Home",
    element:"",
  }
  ]);

const root=ReactDOM.createRoot(document.getElementById("root")as HTMLElement)

root.render(
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
<Toaster/>
        <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)