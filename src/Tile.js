import { Lightning, Utils, Router } from "@lightningjs/sdk";

class Tile extends Lightning.Component {
  //   rowLength = MovieData.length;
  static _template() {
    return {
      w: 280,
      h: 350,
      x: 30,
      y: 20,
    };
  }

  _handleEnter() {
    Router.navigate(`moviedetails/${this.data.id}`, {
      data: this.data,
    });
    console.log(this.data);
  }

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
    // console.log(this.data);
  }

  _unfocus() {
    this.patch({ shader: null });
  }
}
export default Tile;
