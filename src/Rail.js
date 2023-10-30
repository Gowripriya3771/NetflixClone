import { Lightning, Utils } from '@lightningjs/sdk'

class Rail extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 420,
      x: 50,
      y: 660,
      rect: true,
      color: 0xff777777,
      Wrapper: {},
    }
  }
}
export default Rail
