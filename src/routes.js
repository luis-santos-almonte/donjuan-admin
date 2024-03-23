import Dashboard from "views/Dashboard.js";
import Products from "views/Products";
import Categories from "views/Categories";
import Rooms from "views/Rooms";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Productos",
    icon: "nc-icon nc-basket",
    component: <Products />,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categorias",
    icon: "nc-icon nc-book-bookmark",
    component: <Categories />,
    layout: "/admin",
  },
  {
    path: "/rooms",
    name: "Habitaciones",
    icon: "nc-icon nc-layout-11",
    component: <Rooms />,
    layout: "/admin",
  },
];
export default routes;
