import { Lightning, Utils } from "@lightningjs/sdk";

// import NavbigItem from "./NavbigItem";
import NavsmallItem from "./NavsmallItem";

// import { Router } from "@lightningjs/sdk/src/Router";

class Navbar extends Lightning.Component {
  index = 0;
  boxlength = 6;
  static _template() {
    return {
      w: 90,
      h: 1080,
      x: 0,
      y: 0,
      rect: true,
      color: 0xff000000, //pink
      zIndex: 2,
      shader: null,

      Box: {
        x: 30,
        Box1: {
          type: NavsmallItem,
          Searchicon: {
            h: 40,
            w: 40,
            y: 200,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/search.svg"),
              20,
              20
            ),
          },
          Label1: {
            y: 200,
            x: 55,
            color: 0xffffffff,
            text: { text: "Search", fontSize: 30 },
            visible: false,
          },
        },
        Box2: {
          type: NavsmallItem,
          HomeIcon: {
            w: 40,
            h: 40,
            y: 300,
            color: 0xffffffff,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/home.svg"),
              20,
              20
            ),
          },
          Label2: {
            y: 300,
            x: 55,
            color: 0xffffffff,
            text: { text: "Home", fontSize: 30 },
            visible: false,
          },
        },
        Box3: {
          type: NavsmallItem,
          SeriesIcon: {
            w: 40,
            h: 40,
            y: 400,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/series.svg"),
              20,
              20
            ),
          },
          Label3: {
            y: 400,
            x: 55,
            color: 0xffffffff,
            text: { text: "Series", fontSize: 30 },
            visible: false,
          },
        },
        Box4: {
          type: NavsmallItem,
          MoviesIcon: {
            w: 40,
            h: 40,
            y: 500,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/movies.svg"),
              20,
              20
            ),
          },
          Label4: {
            y: 500,
            x: 55,
            color: 0xffffffff,
            text: { text: "Movies", fontSize: 30 },
            visible: false,
          },
        },

        Box5: {
          type: NavsmallItem,
          PlusIcon: {
            w: 40,
            h: 40,
            y: 600,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/plus.svg"),
              20,
              20
            ),
          },
          Label5: {
            y: 600,
            x: 55,
            color: 0xffffffff,
            text: { text: "My List", fontSize: 30 },
            visible: false,
          },
        },
        Box6: {
          type: NavsmallItem,
          AddIcon: {
            h: 40,
            w: 40,
            y: 700,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/new.svg"),
              20,
              20
            ),
          },
          Label6: {
            y: 700,
            x: 55,
            color: 0xffffffff,
            text: { text: "Add New", fontSize: 30 },
            visible: false,
          },
        },
      },
    };
  }

  _getFocused() {
    return this.tag("Box").children[this.index];
  }

  // _handleEnter() {
  //   Router.navigate("grid");
  // }

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
      // rect: true,
      // w: 100,
      // h: 20,
      // color: 0xff000000,
      // shader: {
      //   type: Lightning.shaders.FadeOut,
      //   right: 100,
      //   // bottom: 200,
      //   color: 0x00000000,
      // },
    });
    this.tag("Box.Box1.Label1").patch({ visible: true });
    this.tag("Box.Box2.Label2").patch({ visible: true });
    this.tag("Box.Box3.Label3").patch({ visible: true });
    this.tag("Box.Box4.Label4").patch({ visible: true });
    this.tag("Box.Box5.Label5").patch({ visible: true });
    this.tag("Box.Box6.Label6").patch({ visible: true });

    // this.tag("Box1").patch({ type: NavbigItem });
  }
  _unfocus() {
    this.patch({ w: 90 });
    this.tag("Box.Box1.Label1").patch({ visible: false });
    this.tag("Box.Box2.Label2").patch({ visible: false });
    this.tag("Box.Box3.Label3").patch({ visible: false });
    this.tag("Box.Box4.Label4").patch({ visible: false });
    this.tag("Box.Box5.Label5").patch({ visible: false });
    this.tag("Box.Box6.Label6").patch({ visible: false });
  }
}
export default Navbar;
