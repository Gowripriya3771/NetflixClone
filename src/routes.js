import { Router } from "@lightningjs/sdk";
import Home from "./Home";
import Main from "./Main";
import MovieDetails from "./MovieDetails";

const routes = {
  root: "main",
  routes: [
    {
      path: "main",
      component: Main,
    },
    {
      path: "home",
      component: Home,
    },
    {
      path: "moviedetails",
      component: MovieDetails,
    },
  ],
};

export default routes;
