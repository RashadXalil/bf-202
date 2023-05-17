import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Products from "../pages/Admin/Products/Products";
import Home from "../pages/Site/Home/Home";
import ProductDetail from "../pages/Site/ProductDetail/ProductDetail";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
export const ROUTES = [{
    path: "/",
    element: <SiteRoot />,
    children: [{
        path: "",
        element: <Home />
    },
    {
        path: "/:id",
        element: <ProductDetail />
    }
    ]
}, {
    path: "/admin",
    element: <AdminRoot />,
    children: [{
        path: "",
        element: <Dashboard />
    },
    {
        path: "products",
        element: <Products />
    }

    ]
}]