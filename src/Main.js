import { Lightning, Utils } from "@lightningjs/sdk";
import Navbar from "./Navbar";
import Rail from "./Rail";
// import Content from "./Content";
import Home from "./Home";
// import NavbigItem from "./NavbigItem";
export default class Main extends Lightning.Component {
  index = 0;
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xff000000,
        rect: true,
        Home: {
          type: Home,
          x: 90,
          y: 0,
          data: "hai",
        },

        // Content: {
        //   type: Content,
        // },
        Navbar: {
          type: Navbar,
        },
        // Nav: {
        //   type: NavbigItem,
        // },
        Rail: {
          type: Rail,
        },
      },
    };
  }

  $changeDetails(value) {
    this.tag("Home").patch({ data: value });
    console.log("### main:", value);
  }

  // $changeDetails(value) {
  //   this.tag("MovieDetails").patch({ data: value });
  //   console.log(value);
  // }

  _getFocused() {
    if (this.index === 0) {
      return this.tag("Rail");
    } else {
      return this.tag("Navbar");
    }
  }

  _handleRight() {
    if (this.index === 1) {
      this.index = 0;
    }
  }
  _handleLeft() {
    if (this.index === 0) {
      this.index = 1;
    }
  }
  _handleBack() {
    this.index = 1;
  }
  _init() {
    console.log(this.index);
  }
}
