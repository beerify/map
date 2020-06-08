import React, { useEffect, useState } from 'react'
import { Dimensions, Picker, Platform, Text, View } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './MobileMapStyle'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import locations from '../constants/locations'
import provinces from '../constants/provinces'
import ProvPick from './provpick'

const { iah } = locations

export default function MobileMap() {
  const [w, setW] = useState(Dimensions.get('window').width)
  const [h, setH] = useState(Dimensions.get('window').height)

  useEffect(() => {
    ScreenOrientation.addOrientationChangeListener(() => {
      const { height, width } = Dimensions.get('window')

      setH(height)
      setW(width)
      console.log(height, width)
    })
  }, [])

  const map = () => {
    return {
      width: w,
      height: h,
    }
  }
/*
      <Picker
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
*/
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ProvPick />
      <MapView
        loadingEnabled={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        scrollEnabled={true}
        toolbarEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          latitude: iah.lat,
          longitude: iah.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
      />
    </View>
  )
}