import React, { useEffect, useState } from 'react'
import { Picker, Platform, View } from 'react-native'
import provinces from '../constants/provinces'
import centmap from '../constants/centmap'
import styles from './MobileMapStyle'

// TODO use Context to share the picker state
export default function ProvPick({callback}) {

  // we're only doing ontario for now
  // return null

  const [selected, setSelected] = useState('ON')
  const web = Platform.OS === 'web'

  const handleSelected = (val) => {
    setSelected(val)
    const [lat, lng] = centmap[val]
    callback(val, {lat, lng})
  }

  if (web) {
    return (
      <View style={styles.pickerWrapper}>
        <Picker
          placeholder='Choose Province'
          selectedValue={selected}
          style={styles.pickerContent}
          onValueChange={(val, i) => handleSelected(val)}
        >
          {Object.keys(provinces).map(p => {
            return (
              <Picker.Item
                label={provinces[p]}
                value={p}
                key={p}
              />
            )
          })}
        </Picker>
      </View>
      )
  }

  return (
    <Picker
      placeholder='Choose Province'
      selectedValue={selected}
      style={styles.picker}
      onValueChange={(val, i) => handleSelected(val)}
    >
      {Object.keys(provinces).map(p => {
        return (
          <Picker.Item
            label={provinces[p]}
            value={p}
            key={p}
          />
        )
      })}
    </Picker>
  )
}