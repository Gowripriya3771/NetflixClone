import { Lightning, Utils } from '@lightningjs/sdk'

class Tile extends Lightning.Component {
  static _template() {
    return {
      w: 280,
      h: 350,
      x: 70,
      y: 700,
      rect: true,
      color: 0xff005500,
    }
  }
}
export default Tile
