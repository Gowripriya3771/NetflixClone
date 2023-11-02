import { Lightning, Utils } from "@lightningjs/sdk";

export default class Box extends Lightning.Component {
  static _template() {
    return {
      x: 10,
      //   y: 500,
      w: 40,
      h: 40,
      rect: true,
      color: 0xff000000,
    };
  }
  _focus() {
    this.patch({ color: 0xff000000, w: 150 });
  }
  _unfocus() {
    this.patch({ color: 0xff000055, w: 40 });
  }
  //
  //   set data(col) {
  //     console.log(col);
  //     this.patch({ color: col });
  //   }
}
