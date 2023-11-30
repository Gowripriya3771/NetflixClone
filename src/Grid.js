import { Lightning, Router } from "@lightningjs/sdk";

class Grid extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xff777777,
      shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
      Image: {
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          radius: 20,
        },
      },
      Label: {
        x: 10,
        y: 435,
        w: (w) => w,
        color: 0xff550055,
        text: { fontSize: 30 },
      },
    };
  }

  /**
   * Setter for setting the values for the item property.
   *
   * @Param The value that needs to be setted to the item property.
   *
   */

  async _init() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAwY2Q3NGE3MzE0YjU4ODdhNzc2NmY3MzIwMjYzMiIsInN1YiI6IjY1NDRjOTk0OWQ2ZTMzMDZjYWJiNDM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hfBsBUqOC0cQIDWQveMVWfsrJ2uorp6QJ_Iaj86ugMk",
      },
    };
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/9560?language=en-US",
      options
    );
    let data2 = await response.json();
    console.log(data2);

    this._refocus();
  }

  _focus() {
    this.patch({
      smooth: { color: 0xffffffff, scale: 1.1 },
      Label: {
        smooth: { color: 0xff000000 },
      },
      Rectangle: {
        color: 0xff550055,
        x: 10,
        y: (y) => y + 72,
        w: (w) => w - 20,
        h: 5,
        rect: true,
      },
    });
  }

  /**
   * This function overrides the default behavior of the component when goes out of focus.
   * We can add all the changes / updates that needs to be made to the component when
   * it goes out of the focus.
   *
   */
  _unfocus() {
    this.patch({
      smooth: { color: 0xff777777, scale: 1.0 },
      Label: {
        smooth: { color: 0xff555555 },
      },
      Rectangle: undefined,
    });
  }
}

export default Grid;
