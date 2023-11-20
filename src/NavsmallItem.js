import { Lightning, Utils } from "@lightningjs/sdk";
import NavbigItem from "./NavbigItem";

export default class NavsmallItem extends Lightning.Component {
  static _template() {
    // array = ["Search", "Home", "Series", "Movies", "My List", "Add New"];
    return {
      // x: 10,
      // y: 20,
      // color: 0xffffffff,
      // text: { text: "hai" },

      w: 40,
      h: 40,
      // text: { text: "hai" },
    };
  }
  _focus() {
    this.patch({
      w: 40,
      shader: {
        type: Lightning.shaders.Outline,
        stroke: [20, 30, 30],
        color: 0xffffffff,
      },
    });
  }
  // _focus() {
  //   // this.patch({ w: 300 });
  //   this.patch({ type: NavbigItem });
  // }
  _unfocus() {
    this.patch({ w: 40, shader: null });
  }
}
