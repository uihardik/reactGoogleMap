import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";


var indexRoutes = [
  { path: "/landing", name: "LandingPage", component: LandingPage },
  { path: "/all", name: "all", component: Components },
  { path: "/", name: "Components", component: LandingPage }
];

export default indexRoutes;
