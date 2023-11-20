import { Lightning, Utils } from "@lightningjs/sdk";

class Tile extends Lightning.Component {
  //   rowLength = MovieData.length;
  static _template() {
    return {
      w: 280,
      h: 350,
      x: 30,
      y: 20,
      // shader: {
      //   type: Lightning.shaders.RoundedRectangle, // rail to b displayed as rounded reactangle
      //   radius: 20,
      // },
    };
  }
  // _init() {
  //   // console.log(this.description);
  //   console.log(this.src);
  //   // console.log(this.title);
  // }

  _focus() {
    this.patch({
      shader: {
        type: Lightning.shaders.Outline,
        stroke: [20, 30, 30],
        color: 0xfff90909,
      },
    });
    this.fireAncestors("$changeDetails", this.data);
    // this.fireAncestors("$changeDetail", this.poster);
    console.log(this.data.Description);
  }

  _unfocus() {
    this.patch({ shader: null });
  }
}
export default Tile;
