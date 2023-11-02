// import { Lightning, Utils } from "@lightningjs/sdk";
// import Tile from "./Tile";
// import { MovieData } from "./MovieData";

// class Rail2 extends Lightning.Component {
//   index = 0;

//   rowlength2 = MovieData.length - 5;
//   static _template() {
//     return {
//       w: 1920,
//       h: 420,
//       x: 60,
//       y: 660,
//       rect: true,
//       color: 0xff000000,
//       Wrapper: {},
//     };
//   }

//   _init() {
//     const mapTiles = MovieData.map((value, index) => ({
//       type: Tile,

//       src: value.Poster,
//       x: 0,
//       y: 20 + index * (350 + 35),
//     }));

//     this.tag("Wrapper").children = mapTiles;
//   }
//   _focus() {
//     this.patch({ color: 0xff777777 });
//   }
//   _unfocus() {
//     this.patch({ color: 0xff000000 });
//   }

//   _getFocused() {
//     return this.tag("Wrapper").children[this.index];
//   }

//   _handleDown() {
//     if (this.index < this.rowlength2) {
//       this.index++;
//       this.repositionWrapper();
//     }
//   }
//   _handleUp() {
//     if (this.index > 0) {
//       this.index--;
//       this.repositionWrapper();
//     }
//   }

//   repositionWrapper() {
//     const wrapper = this.tag("Wrapper");
//     //   const currentFocus = wrapper.children[this.index]
//     // const cardSize = currentFocus.cardSize;
//     if (this.index < this.rowlength2 - 3) {
//       wrapper.setSmooth("y", -350 * this.index, {
//         duration: 0.3,
//       });
//     }
//   }
// }
// export default Rail2;
