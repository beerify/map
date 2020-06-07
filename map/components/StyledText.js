import * as React from 'react'
import { Text } from 'react-native'

export function MonoText(props) {
  const { style } = props
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
}
