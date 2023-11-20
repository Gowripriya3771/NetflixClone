import { Lightning, Utils } from "@lightningjs/sdk";
import { MovieData } from "./MovieData";

class Content extends Lightning.Component {
  index = 0;
  static _template() {
    return {
      w: 280,
      h: 350,
      x: 90,
      y: 60,

      Container: {
        Movieposter: {
          x: 70,
          y: 70,
          h: 250,
          w: 200,
          //   src: value.Poster,
        },
      },
    };
  }
  // data = {};

  // set data(item) {
  //   console.log(item);
  // }
}
export default Content;
