import { Router } from "@lightningjs/sdk";

import routes from "./routes";

export default class App extends Router.App {
  _setup() {
    Router.startRouter(routes, this);
  }
}
