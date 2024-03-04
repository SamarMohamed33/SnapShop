import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import SecondaryLayout from "./components/Layouts/SecondaryLayout/SecondaryLayout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound/NotFound";
import Brand from "./components/Brand/Brand";
import CartProvider from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import Address from "./components/Address/Address";
import WishlistProvider from "./context/wishlistContext";
import Orders from "./components/Orders/Orders";
import UserProvider from "./context/UserContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "snapshop",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          ),
        },
        {
          path: "product-details/:id",
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              <Categories />
            </ProtectedRoutes>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoutes>
              <Brands />
            </ProtectedRoutes>
          ),
        },
        {
          path: "brand/:id",
          element: (
            <ProtectedRoutes>
              <Brand />
            </ProtectedRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoutes>
              <Wishlist />
            </ProtectedRoutes>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "address/:id",
          element: (
            <ProtectedRoutes>
              <Address />
            </ProtectedRoutes>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <SecondaryLayout />,
      children: [
        { path: "/signup", element: <Signup /> },
        { path: "/signin", element: <Signin /> },
      ],
    },
  ]);
  return (
    <CartProvider>
      <UserProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
          <ToastContainer theme="light" autoClose={500} />
        </WishlistProvider>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
