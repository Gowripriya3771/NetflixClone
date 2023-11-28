import { Lightning, Utils, Router } from "@lightningjs/sdk";
import { navigate } from "@lightningjs/sdk/src/Router";
import Navbar from "./Navbar";

export default class MovieDetails extends Lightning.Component {
  index = 0;
  static _template() {
    // index = 0;
    return {
      w: 1920,
      h: 1080,

      color: 0xff000000,
      rect: true,
      Overview: {
        Navbar: {
          w: 60,
          type: Navbar,
        },
        Background: {
          x: 100,
          Image: {
            w: 1500,
            h: 1080 - 200,
            x: 1920 - 1400,
            // y: 10,

            src: Utils.asset("/images/moneyheist.jpg"),

            shader: {
              type: Lightning.shaders.FadeOut,
              left: 500,
              bottom: 200,
              color: 0xff000000,
            },
          },

          Label: {
            x: 15,
            y: 170,
            color: 0xffffffff,
            text: { text: "", fontSize: 80 },
            shader: null,

            Label2: {
              x: 0,
              y: 95,
              color: 0xffffffff,
              text: { text: "", fontSize: 30 },
            },
            Icon1: {
              x: 85,
              y: 100,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/tony.svg"),
                30,
                30
              ),
            },
            Icon2: {
              x: 125,
              y: 95,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/rating.svg"),
                30,
                30
              ),
              Rating: {
                x: 30,
                y: 0,
                color: 0xffffffff,
                text: { text: "9.6", fontSize: 30 },
              },
            },
            Plot: {
              x: 0,
              y: 145,
              color: 0xffffffff,
              text: {
                text: "The Cotton Club the club, those that ran it, and is peppered with the Jazz music that made it so famous.The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
                fontSize: 25,
                wordWrapWidth: 470,
              },
            },
            Play: {
              x: 0,
              y: 330,
              rect: true,
              color: 0xffffffff,
              w: 150,
              h: 50,
              PlayButton: {
                x: 15,
                y: 10,
                texture: Lightning.Tools.getSvgTexture(
                  Utils.asset("/images/play.svg"),
                  30,
                  30
                ),
              },
              Playtext: {
                color: 0xff000000,
                x: 60,
                y: 5,
                text: { text: "Play", fontSize: 30 },
              },
            },

            List: {
              x: 200,
              y: 330,
              rect: true,
              color: 0x77777777,
              w: 180,
              h: 50,
              PlayButton: {
                x: 15,
                y: 10,
                texture: Lightning.Tools.getSvgTexture(
                  Utils.asset("/images/list.svg"),
                  30,
                  30
                ),
              },
              Playtext: {
                color: 0xffffffff,
                x: 60,
                y: 5,
                text: { text: "My List", fontSize: 30 },
              },
            },
            Like: {
              x: 400,
              y: 330,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/like.svg"),
                50,
                50
              ),
            },
            Dislike: {
              x: 470,
              y: 330,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/dislike.svg"),
                50,
                50
              ),
            },

            Plot1: {
              x: 0,
              y: 400,
              color: 0xffffffff,
              text: {
                text: "Starring:",
                fontSize: 25,
              },
            },
            Plot2: {
              x: 0,
              y: 450,
              color: 0xffffffff,
              text: {
                text: "Director:",
                fontSize: 25,
              },
            },
            Plot3: {
              x: 0,
              y: 500,
              color: 0xffffffff,
              text: {
                text: "Genres:",
                fontSize: 25,
              },
            },
          },
        },
      },
    };
  }

  _handleLeft() {
    if (this.index === 0) {
      this.index = 1;
      console.log("check");
    }
  }
  _handleRight() {
    if (this.index === 1) {
      this.index = 0;
    }
  }

  set params(args) {
    this.patch({
      Overview: {
        type: Navbar,
        Background: {
          // x: 60,
          // flex: { direction: "row", left: 0 },

          Image: {
            w: 1500,
            h: 1080 - 300,
            x: 1920 - 1400,
            // y: 10,

            // src: args.data.Poster,

            shader: {
              type: Lightning.shaders.FadeOut,
              left: 500,
              bottom: 250,
              color: 0xff000000,
            },
          },

          // rect: true,
          // color: 0xff000000,

          // flex: { direction: "column", padding: 20, wrap: true },

          Label: {
            // flex: { direction: "row", padding: 20, wrap: true },
            x: 15,
            y: 170,
            color: 0xffffffff,
            text: { text: args.data.title, fontSize: 70 },
            shader: null,

            Label2: {
              x: 0,
              y: 95,
              color: 0xffffffff,
              text: {
                // text: "2023",
                text: args.data.release_date.slice(0, 4),
                fontSize: 30,
              },
            },
            Icon1: {
              x: 85,
              y: 100,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/tony.svg"),
                30,
                30
              ),
            },
            Icon2: {
              x: 125,
              y: 95,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/rating.svg"),
                30,
                30
              ),
              Rating: {
                x: 30,
                y: 0,
                color: 0xffffffff,
                text: { text: "9.6", fontSize: 30 },
              },
            },
            Plot: {
              x: 0,
              y: 145,
              color: 0xffffffff,
              text: {
                text: args.data.overview,
                fontSize: 25,
                wordWrap: true,

                wordWrapWidth: 470,
                maxLines: 5,
                maxLinesSuffix: "...",
              },
            },
            Play: {
              x: 0,
              y: 330,
              rect: true,
              color: 0xffffffff,
              w: 150,
              h: 50,
              PlayButton: {
                x: 15,
                y: 10,
                texture: Lightning.Tools.getSvgTexture(
                  Utils.asset("/images/play.svg"),
                  30,
                  30
                ),
              },
              Playtext: {
                color: 0xff000000,
                x: 60,
                y: 5,
                text: { text: "Play", fontSize: 30 },
              },
            },

            List: {
              x: 200,
              y: 330,
              rect: true,
              color: 0x77777777,
              w: 180,
              h: 50,
              PlayButton: {
                x: 15,
                y: 10,
                texture: Lightning.Tools.getSvgTexture(
                  Utils.asset("/images/list.svg"),
                  30,
                  30
                ),
              },
              Playtext: {
                color: 0xffffffff,
                x: 60,
                y: 5,
                text: { text: "My List", fontSize: 30 },
              },
            },
            Like: {
              x: 400,
              y: 330,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/like.svg"),
                50,
                50
              ),
            },
            Dislike: {
              x: 470,
              y: 330,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/dislike.svg"),
                50,
                50
              ),
            },

            Plot1: {
              x: 0,
              y: 400,
              color: 0xffffffff,
              text: {
                text: `Starring : ${args.data.actors}`,
                fontSize: 25,
              },
            },
            Plot2: {
              x: 0,
              y: 450,
              color: 0xffffffff,
              text: {
                text: `Director : ${args.data.director}`,
                fontSize: 25,
              },
            },
            Plot3: {
              x: 0,
              y: 500,
              color: 0xffffffff,
              text: {
                text: "Genres : Comedy",
                fontSize: 25,
              },
            },
          },
        },
      },
    });

    this.tag("Background.Image").patch({
      src: `https://image.tmdb.org/t/p/original${args.data.backdrop_path}`,
    });
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
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/9560?language=en-US",
      options
    );
    let data1 = await response.json();
    console.log(data1);
    this._refocus();
  }
}
