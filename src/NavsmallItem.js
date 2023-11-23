import { Lightning, Utils } from "@lightningjs/sdk";
// import NavbigItem from "./NavbigItem";

export default class NavsmallItem extends Lightning.Component {
  static _template() {
    return {
      w: 40,
      h: 40,
    };
  }
  _focus() {
    this.patch({
      w: 40,
      // rect: true,
      // color: 0xff777777,
    });
  }

  _unfocus() {
    this.patch({ w: 40, shader: null });
  }
}
