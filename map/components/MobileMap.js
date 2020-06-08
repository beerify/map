import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import React, { useState } from 'react'
import { Picker, Platform, Text, View } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import styles from './MobileMapStyle'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import locations from '../constants/locations'
import provinces from '../constants/provinces'

const { iah } = locations

export default function MobileMap() {
  const [selected, setSelected] = useState('ON')
  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
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
      <MapView
        zoomControlEnabled={true}
        zoomEnabled={true}
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