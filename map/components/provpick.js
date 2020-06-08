import React, { useEffect, useState } from 'react'
import { Picker, Platform, View } from 'react-native'
import provinces from '../constants/provinces'
import styles from './MobileMapStyle'

// TODO use Context to share the picker state
export default function ProvPick() {
  const [selected, setSelected] = useState('ON')
  const web = Platform.OS === 'web'
  if (web) {
    return (
      <View style={styles.pickerWrapper}>
        <Picker
          placeholder='Choose Province'
          selectedValue={selected}
          style={styles.pickerContent}
          onValueChange={(val, i) => setSelected(val)}
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
      onValueChange={(val, i) => setSelected(val)}
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