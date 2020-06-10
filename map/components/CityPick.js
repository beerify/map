import React, { useEffect, useState } from 'react'
import { Picker, Platform, View } from 'react-native'

import styles from './MobileMapStyle'

export default function CityPick({cities, callback, data}) {
  const [selected, setSelected] = useState('All')
  const handleSelected = (val) => {
    setSelected(val)
    callback(val)
  }
  const getCityCount = (city) => {
    if (city === 'All') {
      return cities.length
    }
    return data.filter(o => o.city === city).length
  }

  return (
    <View style={styles.pickerWrapper}>
      <Picker
        placeholder='Choose City'
        selectedValue={selected}
        style={styles.pickerContent}
        onValueChange={(val, i) => handleSelected(val)}
      >
        {['All', ...cities].map(c => {
          return (
            <Picker.Item
              label={`${c} (${getCityCount(c)})`}
              value={c}
              key={c}
            />
          )
        })}
      </Picker>
    </View>
    )
}