import { Map, GoogleApiWrapper } from 'google-maps-react'
import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: height  * 0.9,
    width: width,
  },
  
})
const iah = {
  lat: 43.6655507,
  lng: -79.4675274,
}
const gmap = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}

function WebMap(props) {
  console.log(props.google)
  return (
    <View id='map' style={styles.container}>
      <Text>
        <Map
          google={props.google}
          style={gmap}
          zoom={14}

          initialCenter={{
            lat: iah.lat,
            lng: iah.lng,
          }}
        />
      </Text>

    </View>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBX9vQ8Vor-iw4ZZvrTR5STac1f0R9RsiQ'
})(WebMap)