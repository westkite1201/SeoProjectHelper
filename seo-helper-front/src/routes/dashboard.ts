// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard"


const dashboardRoutes = [
  {
    sideView: true,
    //exact : true,
    path: "/App/",
    sidebarName: "App",
    navbarName: "App",
    icon: Dashboard,

  },
  //{ redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
