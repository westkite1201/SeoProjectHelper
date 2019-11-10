// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import App from '../App'

const dashboardRoutes = [
  {
    sideView: true,
    //exact : true,
    path: "/App/",
    sidebarName: "App",
    navbarName: "App",
    icon: Dashboard,
    component: App
  },
  //{ redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
