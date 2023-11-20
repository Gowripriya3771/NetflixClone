import { Lightning, Utils, Router } from "@lightningjs/sdk";
import { navigate } from "@lightningjs/sdk/src/Router";

export default class Home extends Lightning.Component {
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
          x: 15,
          y: 170,
          color: 0xffffffff,
          text: { text: "MONEY HEIST", fontSize: 70 },
          shader: null,

          Label2: {
            x: 0,
            y: 85,
            color: 0xffffffff,
            text: { text: "2018", fontSize: 30 },
          },
          Icon1: {
            x: 85,
            y: 90,
            texture: Lightning.Tools.getSvgTexture(
              Utils.asset("/images/tony.svg"),
              30,
              30
            ),
          },
          Icon2: {
            x: 125,
            y: 90,
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
            y: 135,
            color: 0xffffffff,
            text: {
              text: "The Cotton Club the club, those that ran it, and is peppered with the Jazz music that made it so famous.The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
              fontSize: 25,
              wordWrapWidth: 700,
            },
          },
        },
      },
    };
  }

  // _init() {
  //   console.log(this.data, this.x);
  // }

  set data(data) {
    this.tag("Plot").patch({ text: { text: data.Description } });
    this.tag("Label").patch({ text: { text: data.Title } });
    this.tag("Label2").patch({ text: { text: data.Year } });
    this.tag("Image").patch({ src: data.Poster });
    // this.tag("Background").patch({ text: { text: data.Poster } });

    // this.tag("Plot").patch({ text: { text: data } });
    console.log(data);
  }
}
