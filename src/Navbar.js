import { Lightning, Utils } from "@lightningjs/sdk";

import NavbigItem from "./NavbigItem";
import NavsmallItem from "./NavsmallItem";

// import { Router } from "@lightningjs/sdk/src/Router";

class Navbar extends Lightning.Component {
  index = 0;
  boxlength = 6;
  static _template() {
    return {
      w: 60,
      h: 1080,
      x: 0,
      y: 0,
      rect: true,
      color: 0xff000000, //pink
      zIndex: 2,
      shader: null,
      // Box1: {
      //   type: NavsmallItem,
      // },
      // Box2: {},
      Test: {
        type: NavsmallItem,
        x: 10,
        y: 70,
        color: 0xffffffff,
        text: { text: "hai", fontSize: 20 },
      },
      Box: {
        Box1: {
          type: NavsmallItem,
          y: 200,
          texture: Lightning.Tools.getSvgTexture(
            Utils.asset("/images/search.svg"),
            20,
            20
          ),
        },
        Box2: {
          type: NavsmallItem,
          y: 300,
          color: 0xffffffff,
          texture: Lightning.Tools.getSvgTexture(
            Utils.asset("/images/home.svg"),
            20,
            20
          ),
        },
        Box3: {
          type: NavsmallItem,
          y: 400,
          texture: Lightning.Tools.getSvgTexture(
            Utils.asset("/images/series.svg"),
            20,
            20
          ),
        },
        Box4: {
          type: NavsmallItem,
          y: 500,
          texture: Lightning.Tools.getSvgTexture(
            Utils.asset("/images/movies.svg"),
            20,
            20
          ),
        },
        Box5: {
          type: NavsmallItem,
          y: 600,
          texture: Lightning.Tools.getSvgTexture(
            Utils.asset("/images/plus.svg"),
            20,
            20
          ),
        },
        Box6: {
          type: NavsmallItem,
          y: 700,
          texture: Lightning.Tools.getSvgTexture(
            Utils.asset("/images/new.svg"),
            20,
            20
          ),
        },
      },
    };
  }

  _getFocused() {
    return this.tag("Box").children[this.index];
  }

  _handleDown() {
    if (this.index == this.boxlength - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  _handleUp() {
    if (this.index === 0) {
      this.index = this.boxlength;
    }
    if (this.index > 0) {
      this.index--;
    }
  }

  _focus() {
    this.patch({
      smooth: { w: 300 },
      // shader: {
      //   type: Lightning.shaders.FadeOut,
      //   right: 100,
      //   // bottom: 200,
      //   color: 0x00000000,
      // },
    });

    // this.tag("Box1").patch({ type: NavbigItem });
  }
  _unfocus() {
    this.tag("Box1").patch({ type: NavsmallItem });
    this.patch({ w: 50 });
  }

  _init() {
    console.log("hai gowriiiii");
  }
}
export default Navbar;
