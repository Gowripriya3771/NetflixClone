import { Lightning, Utils } from "@lightningjs/sdk";
import { MovieData } from "./MovieData";

class Tile extends Lightning.Component {
  //   rowLength = MovieData.length;
  static _template() {
    return {
      w: 280,
      h: 350,
      x: 30,
      y: 20,

      shader: {
        type: Lightning.shaders.RoundedRectangle, // rail to b displayed as rounded reactangle
        radius: 20,
      },
    };
  }
  _focus() {
    this.patch({ h: 400 });
  }
  _unfocus() {
    this.patch({ h: 350 });
  }
}
export default Tile;
