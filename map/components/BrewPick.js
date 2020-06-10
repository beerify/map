import React, { useEffect, useState } from 'react'
import { Picker, Platform, View } from 'react-native'

import styles from './MobileMapStyle'

export default function BrewPick({breweries, callback}) {
  const [selected, setSelected] = useState('All')
  const handleSelected = (val, i) => {
    setSelected(val)
    callback(breweries[i])
  }

  return (
    <View style={styles.pickerWrapper}>
      <Picker
        placeholder='Choose Brewery'
        selectedValue={selected}
        style={styles.pickerContent}
        onValueChange={(val, i) => handleSelected(val, i)}
      >
        {breweries.filter(b=>!!b).map(b => {
          return (
            <Picker.Item
              label={b.name}
              value={b.name}
              key={`bdd-${b.name}`}
            />
          )
        })}
      </Picker>
    </View>
    )
}