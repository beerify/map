import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Platform, Text, View } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import styles from './MobileMapStyle'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default function MobileMap() {
  const iah = {
    lat: 43.6655507,
    lng: -79.4675274,
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          latitude: iah.lat,
          longitude: iah.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>
  )
}