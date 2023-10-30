import { Lightning, Utils } from '@lightningjs/sdk'

class Navbar extends Lightning.Component {
  static _template() {
    return {
      w: 50,
      h: 1080,
      x: 0,
      y: 0,
      rect: true,
      color: 0xff550055,
    }
  }
}
export default Navbar
