import { Lightning, Utils } from "@lightningjs/sdk";
import Tile from "./Tile";
import { MovieData } from "./MovieData";

class Rail extends Lightning.Component {
  index = 0;

  rowlength = MovieData.length - 1;
  static _template() {
    return {
      w: 1920,
      h: 420,
      x: 60,
      y: 660,
      rect: true,
      color: 0xff000000,
      Wrapper: {},
    };
  }

  _init() {
    const mapTiles = MovieData.map((value, index) => ({
      type: Tile,

      src: value.Poster,
      x: 20 + index * (280 + 35),
    }));

    this.tag("Wrapper").children = mapTiles;
    // this.tag("Wrapper")=mapTiles;
  }
  _focus() {
    this.patch({ color: 0xff777777 });
  }
  _unfocus() {
    this.patch({ color: 0xff000000 });
  }

  _getFocused() {
    return this.tag("Wrapper").children[this.index];
  }

  _handleRight() {
    if (this.index < this.rowlength) {
      this.index++;
      this.repositionWrapper();
    }
  }
  _handleLeft() {
    if (this.index > 0) {
      this.index--;
      this.repositionWrapper();
    }
  }

  repositionWrapper() {
    const wrapper = this.tag("Wrapper");
    //   const currentFocus = wrapper.children[this.index]
    // const cardSize = currentFocus.cardSize;
    if (this.index < this.rowlength + 1 - 3) {
      wrapper.setSmooth("x", -315 * this.index, {
        duration: 0.3,
      });
    }
  }
}
export default Rail;
