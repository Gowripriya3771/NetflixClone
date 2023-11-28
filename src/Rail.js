import { Lightning, Utils, Router } from "@lightningjs/sdk";
import Tile from "./Tile";
import { MovieData } from "./MovieData";

class Rail extends Lightning.Component {
  index = 0;

  rowlength = 20;

  // rowlength = movies.length;
  static _template() {
    return {
      w: 1920,
      h: 420,
      x: 90,
      y: 660,
      rect: true,
      color: 0xff000000,
      Wrapper: {},
    };
  }

  async _init() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAwY2Q3NGE3MzE0YjU4ODdhNzc2NmY3MzIwMjYzMiIsInN1YiI6IjY1NDRjOTk0OWQ2ZTMzMDZjYWJiNDM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hfBsBUqOC0cQIDWQveMVWfsrJ2uorp6QJ_Iaj86ugMk",
      },
    };

    let movies = [];
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    let data = await response.json();
    movies = data.results;
    console.log(movies[0]);
    console.log(movies.length);

    const mapTiles = movies.map((value, index) => {
      console.log(value.title);
      return {
        type: Tile,
        data: value,
        src: `https://image.tmdb.org/t/p/original${value.poster_path}`,

        // title: value.title,

        x: 20 + index * (280 + 35),
      };
    });
    this.tag("Wrapper").children = mapTiles;
    this._refocus();
  }

  _getFocused() {
    return this.tag("Wrapper").children[this.index];

    //first focus to first index
  }

  _handleRight() {
    if (this.index < this.rowlength) {
      this.index++;

      this.repositionWrapper();
      // Router.navigate("moviedetails");
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

    if (this.index < this.rowlength - 3) {
      wrapper.setSmooth("x", -315 * this.index, {
        duration: 0.3,
      });
    }
  }
}
export default Rail;
