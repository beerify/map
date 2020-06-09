import { Platform } from 'react-native'

const generic = require('../assets/images/beer-127.png')
export default {
  'point': 16,
  'icon': 32,
  getAvatar: ({Twitter}) => {
    if (Platform.OS !== 'web') return generic
    if (!Twitter || !Twitter.length) return generic
    if (!Twitter[0].avatar) return generic
    return Twitter[0].avatar
  }
}