export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      // badge: {
      //   variant: "info",
      //   text: "NEW",
      // },
    },
    {
      name: "Customers",
      url: "/customers",
      icon: "icon-user",
    },
    {
      name: "Inventory",
      url: "/inventory",
      icon: "icon-layers",
      children: [
        {
          name: "All Products",
          url: "/inventory/all-products",
          icon: "icon-puzzle",
        },
        {
          name: "Create Products",
          url: "/inventory/create-products",
          icon: "icon-puzzle",
        },
      ],
    },
  ],
};
