import { Router } from "@lightningjs/sdk";
import Home from "./Home";
import Main from "./Main";
import MovieDetails from "./MovieDetails";
import Grid from "./Grid";

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
      path: "moviedetails/:id",
      component: MovieDetails,
    },
    {
      path: "grid",
      component: Grid,
    },
  ],
};

export default routes;
