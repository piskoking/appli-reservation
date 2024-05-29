import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
// import Products from "../Pages/Products"
import ProtectedRoute from "../Services/ProtectedRoute"
import SignIn from "../components/Connection/SignIn";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const token = localStorage.getItem("token");
const router = createBrowserRouter([
    {path: "/" , element: <SignIn />} ,
    // {path: "/products" , element: <Products />},
    {
        path: "/home/", element:
            <ProtectedRoute isAuthenticated={token}>

                <Home />
                
            </ProtectedRoute>
            
    }
])

export default router