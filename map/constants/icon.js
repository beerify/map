import { Platform } from 'react-native'

const gc = 'https://storage.googleapis.com/'
const generic = require('../assets/images/beer-127.png')


export default {
  'point': 16,
  'icon': 32,
  xgetAvatar: ({Twitter}) => {
    if (Platform.OS !== 'web') return generic
    if (!Twitter || !Twitter.length) return generic
    if (!Twitter[0].avatar) return generic
    return Twitter[0].avatar
  },
  getAvatar: info => {
    if (!info.avatar) return generic
    const url = `${gc}beerify-avatars/${info.twitter}.jpg`
    return url
  },
  getBanner: info => {
    if (!info.banner) return null
    const url = `${gc}beerify-headers/${info.twitter}.jpg`
    return url
  }
}