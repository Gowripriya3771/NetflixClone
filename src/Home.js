import { Lightning, Utils, Router } from "@lightningjs/sdk";
import { navigate } from "@lightningjs/sdk/src/Router";
import Rail from "./Rail";
import Navbar from "./Navbar";

export default class Home extends Lightning.Component {
  //
  index = 0;
  static _template() {
    return {
      // x: 90,
      w: 1920,
      h: 1080,
      color: 0xff000000,
      rect: true,
      Background: {
        Image: {
          w: 1500,
          h: 1080 - 500,
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

        // rect: true,
        // color: 0xff000000,
        Label: {
          // flex: { direction: "column", padding: 20 },
          x: 15,
          y: 170,
          color: 0xffffffff,
          text: { text: "MONEY HEIST", fontSize: 70 },
          shader: null,
          // flexItem: { margin: 10 },

          Label2: {
            x: 0,
            y: 85,
            color: 0xffffffff,
            text: { text: "2018", fontSize: 30 },
            // flexItem: { margin: 10 },
          },
          Icon1: {
            x: 85,
            y: 90,
            // flexItem: { margin: 10 },
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/tony.svg"),
              30,
              30
            ),
          },
          Icon2: {
            // flexItem: { margin: 10 },
            x: 125,
            y: 90,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/rating.svg"),
              30,
              30
            ),
            Rating: {
              // flexItem: { margin: 10 },
              x: 30,
              y: 0,
              color: 0xffffffff,
              text: { text: "9.6", fontSize: 30 },
            },
          },
          Plot: {
            // flexItem: { margin: 10 },
            x: 0,
            y: 135,
            color: 0xffffffff,
            text: {
              text: "The Cotton Club the club, those that ran it, and is peppered with the Jazz music that made it so famous.The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
              fontSize: 25,
              wordWrapWidth: 700,
              maxLines: 3,
              maxLinesSuffix: "...",
            },
          },
        },
      },
    };
  }

  _getFocused() {
    if (this.index === 0) {
      return this.tag("Rail");
    } else {
      return this.tag("Navbar");
    }
  }

  set data(data) {
    this.patch({
      Background: {
        // flex: { direction: "column", margin: 20, left: 0 },

        Image: {
          w: 1500,
          h: 1080 - 500,
          x: 1920 - 1400,
          // y: 10,

          src: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,

          shader: {
            type: Lightning.shaders.FadeOut,
            left: 500,
            bottom: 200,
            color: 0xff000000,
          },
        },

        // rect: true,
        // color: 0xff000000,
        Label: {
          // flex: { direction: "column", padding: 20 },
          x: 15,
          y: 170,
          color: 0xffffffff,
          text: { text: data.title, fontSize: 70 },
          shader: null,
          // flexItem: { margin: 10 },

          Label2: {
            x: 0,
            y: 85,
            color: 0xffffffff,
            text: { text: "2018", fontSize: 30 },
            // flexItem: { margin: 10 },
          },
          Icon1: {
            x: 85,
            y: 90,
            // flexItem: { margin: 10 },
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/tony.svg"),
              30,
              30
            ),
          },
          Icon2: {
            // flexItem: { margin: 10 },
            x: 125,
            y: 90,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/rating.svg"),
              30,
              30
            ),
            Rating: {
              // flexItem: { margin: 10 },
              x: 30,
              y: 0,
              color: 0xffffffff,
              text: { text: "9.6", fontSize: 30 },
            },
          },
          Plot: {
            // flexItem: { margin: 10 },
            x: 0,
            y: 135,
            color: 0xffffffff,
            text: {
              text: data.overview,
              fontSize: 25,
              wordWrapWidth: 700,
              maxLines: 3,
              maxLinesSuffix: "...",
            },
          },
          Play: {
            x: 0,
            y: 250,
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
          Info: {
            x: 200,
            y: 250,
            rect: true,
            color: 0x77777777,
            w: 230,
            h: 50,
            PlayButton: {
              x: 15,
              y: 10,
              texture: Lightning.Tools.getSvgTexture(
                Utils.asset("/images/info.svg"),
                30,
                30
              ),
            },
            Playtext: {
              color: 0xffffffff,
              x: 60,
              y: 5,
              text: { text: "More Info", fontSize: 30 },
            },
          },
        },
      },
    });
  }
}
