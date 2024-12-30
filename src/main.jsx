import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Men from "./routes/Men.jsx";
import Women from "./routes/Women.jsx";
import Kids from "./routes/Kids.jsx";
import HomeLiving from "./routes/HomeLiving.jsx";
import Beauty from "./routes/Beauty.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/bag", element: <Bag></Bag> },
      { path: "/men", element: <Men></Men> },
      { path: "/women", element: <Women></Women> },
      { path: "/kids", element: <Kids></Kids> },
      { path: "/home&living", element: <HomeLiving></HomeLiving> },
      { path: "/beauty", element: <Beauty></Beauty> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
