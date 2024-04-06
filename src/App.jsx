import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
// import NavBar from "./Components/Navbar/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Shop /> },
      { path: "men", element: <ShopCategory category="men" /> },
      { path: "women", element: <ShopCategory category="women" /> },
      { path: "kids", element: <ShopCategory category="" /> },
      {
        path: "product",
        element: <Product />,
        children: [{ path: ":productId", element: <Product /> }],
      },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <LoginSignup /> },
    ],
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
