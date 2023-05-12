
import Products from "../components/Admin/Products/Products";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import About from "../pages/Site/About/About";
import Basket from "../pages/Site/Basket/Basket";
import Home from "../pages/Site/Home/Home";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";

export const ROUTES = [
    // Site
    {
        path: "/",
        element: <SiteRoot />,
        children: [
            {
                path: "",
                element: <Home />
            }, {
                path: "about",
                element: <About />
            },
            {
                path: "basket",
                element: <Basket />
            }
        ]
    },
    //Admin
    {
        path: "admin",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <Dashboard />
            }, {
                path: "products",
                element: <Products />
            }

        ]
    }
]