import { Lightning, Utils } from "@lightningjs/sdk";
import Box from "./Box";

class Navbar extends Lightning.Component {
  index = 0;
  static _template() {
    return {
      w: 60,
      h: 1080,
      x: 0,
      y: 0,
      rect: true,
      color: 0xff000000, //pink
      zIndex: 2,
      Box1: {
        type: Box,
        y: 500,
        // data: "0xff550055",
      },
      Box2: {
        type: Box,
        y: 600,
        // data: "0xff000055",
      },
      Box3: {
        type: Box,
        y: 700,
        // data: "0xff000055",
      },
    };
  }

  //   _getFocused() {
  //     return this.tag("Box").children[this.index];
  //   }
  _getFocused() {
    if (this.index === 0) {
      return this.tag("Box1");
    } else if (this.index === 1) {
      return this.tag("Box2");
    } else {
      return this.tag("Box3");
    }
  }

  _handleDown() {
    if (this.index < 2) {
      this.index++;
    }
  }
  _handleUp() {
    if (this.index > 0) {
      this.index--;
    }
  }
  //   _getFocused() {
  //     if (this.index === 0) {
  //       return this.tag("Box1");
  //     }
  //   }
  //   _handleDown() {
  //     this.index = 0;
  //   }
  //   _handleDown() {
  //     if (this.index == 0) {
  //       this.index += 1;
  //     }
  //   }

  _focus() {
    this.patch({ color: 0xff550055, w: 200 }); //green
  }
  _unfocus() {
    this.patch({ color: 0xff005500, w: 60 }); //pink
  }
}
export default Navbar;
