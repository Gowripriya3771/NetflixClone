import { Lightning, Utils } from '@lightningjs/sdk'
import Navbar from './Navbar'
import Rail from './Rail'
import Tile from './Tile'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xff000000,
        rect: true,
        Navbar: {
          type: Navbar,
        },
        Rail: {
          type: Rail,
        },
        Tile: {
          type: Tile,
        },
      },
    }
  }

  _init() {}
}
