import { Lightning, Utils } from "@lightningjs/sdk";

class Test extends Lightning.Component {
  static _template() {
    return {
      w: 500, //280
      h: 350, //350
      x: 30,
      y: 20,
      rect: true,
      color: 0xff550055,
    };
  }
}
export default Test;
