import { Lightning, Utils } from "@lightningjs/sdk";

export default class NavbigItem extends Lightning.Component {
  static _template() {
    return {
      x: 10,
      y: 70,
      color: 0xffffffff,

      text: { text: "hello", fontSize: 20 },
      //   w: 300,
      //   h: 1080,
      //   x: 0,
      //   y: 0,
      //   rect: true,
      //   color: 0xff000000, //pink
      //   zIndex: 2,
      //   shader: null,
      //   Navitem: {
      //     x: 10,
      //     y: 300,
      //     color: 0xffffffff,
      //     text: { text: "hello" },
      //   },
    };
  }
  _init() {
    console.log("IS WORKING?");
  }
}
