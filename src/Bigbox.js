import { Lightning, Utils } from "@lightningjs/sdk";

export default class Bigbox extends Lightning.Component {
  static _template() {
    return {
      x: 10,

      w: 150,
      h: 40,
      rect: true,
      color: 0xff000000,
    };
  }
  //   _focus() {
  //     this.patch({ color: 0xff000000, w: 150 });
  //   }
  //   _unfocus() {
  //     this.patch({ color: 0xff000055, w: 40 });
  //   }
}
