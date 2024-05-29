import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Réservations from "../components/Réservations";
import Catégories from "../components/Catégories";
import Moncompte from "../components/Moncompte";
import Footer from "../components/Footer";
import ProfessionalsCategory from "../components/ProfessionalsCategory";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <SignIn /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/reservations/:id", element: <Réservations /> },
  { path: "/categories", element: <Catégories /> },
  { path: "/account", element: <Moncompte /> },
  { path: "/categories/professionals", element: <ProfessionalsCategory /> },
]);

export default router;
