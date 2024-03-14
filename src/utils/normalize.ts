import { Dimensions, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const isNotTablet = SCREEN_WIDTH / SCREEN_HEIGHT < 0.6
const sizeWidth = isNotTablet ? 414 : 600
const sizeHeight = isNotTablet ? 896 : 1000

const widthBaseScale = SCREEN_WIDTH / sizeWidth
const heightBaseScale = SCREEN_HEIGHT / sizeHeight

export function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export { SCREEN_WIDTH, SCREEN_HEIGHT }
