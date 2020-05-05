import React from "react";
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const Customers = React.lazy(() => import("./views/Customer"));
const CreateProducts = React.lazy(() =>
  import("./views/Products/CreateProducts")
);
const AllProducts = React.lazy(() => import("./views/Products/AllProducts"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  // project routes....
  { path: "/customers", name: "Customer", component: Customers },
  { path: "/inventory", exact: true, name: "Inventory", component: Customers },
  {
    path: "/inventory/create-products",
    name: "Create Products",
    component: CreateProducts,
  },
  {
    path: "/inventory/all-products",
    name: "All Products",
    component: AllProducts,
  },
];

export default routes;
