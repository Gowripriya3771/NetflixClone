import { Lightning, Utils, Router } from "@lightningjs/sdk";

export default class Play extends Lightning.Component {
  static _template() {
    // index = 0;
    return {
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
    };
  }
  _focus() {
    this.patch({
      Play: {
        x: 0,
        y: 250,
        rect: true,
        color: 0xff220022,
        w: 250,
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
          text: { text: "Pause", fontSize: 30 },
        },
      },
    });
  }
}
