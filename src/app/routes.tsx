import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutShippingPage from "./pages/CheckoutShippingPage";
import CheckoutConfirmationPage from "./pages/CheckoutConfirmationPage";
import SuccessPage from "./pages/SuccessPage";
import SalePage from "./pages/SalePage";
import NewArrivalPage from "./pages/NewArrivalPage";
import AboutPage from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/sale",
    Component: SalePage,
  },
  {
    path: "/new-arrival",
    Component: NewArrivalPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetailPage,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
  {
    path: "/checkout",
    Component: CheckoutPage,
  },
  {
    path: "/checkout/shipping",
    Component: CheckoutShippingPage,
  },
  {
    path: "/checkout/confirmation",
    Component: CheckoutConfirmationPage,
  },
  {
    path: "/success",
    Component: SuccessPage,
  },
]);