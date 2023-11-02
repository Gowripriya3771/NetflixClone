import { Lightning, Utils } from "@lightningjs/sdk";
import Navbar from "./Navbar";
import Rail from "./Rail";
import Test from "./Test";
// import Rail2 from "./Rail2";

export default class App extends Lightning.Component {
  // index = -1;
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
        Navbar: {
          type: Navbar,
        },
        Rail: {
          type: Rail,
        },
        // Test: {
        //   type: Test,
        //   y: 990,
        // },
        // Test1: {
        //   type: Test,
        //   x: 500,
        //   y: 990,
        // },
      },
    };
  }

  _getFocused() {
    // if (this.index === -1) {
    //   return this.tag("App");
    //   // this.index = 0;
    //   this.index=1,
    // }
    if (this.index === 0) {
      return this.tag("Navbar");
    } else {
      return this.tag("Rail");
    }
  }

  _handleRight() {
    if (this.index === 0) {
      this.index = 1;
    }
  }
  _handleLeft() {
    if (this.index === 1) {
      this.index = 0;
    }
  }
  _handleEnter() {
    this.index = 0;
  }

  // repositionWrapper() {
  //   const wrapper = this.tag("Wrapper");
  //   //   const currentFocus = wrapper.children[this.index]
  //   // const cardSize = currentFocus.cardSize;
  //   if (this.index < this.rowlength + 1 - 3) {
  //     wrapper.setSmooth("y", -380 * this.index, {
  //       duration: 0.3,
  //     });
  //   }
  // }
}
