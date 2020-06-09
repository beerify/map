import React, { useEffect, useState } from 'react'
import { Dimensions, Picker, Platform, Text, View } from 'react-native'
// import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './MobileMapStyle'
import MapView, { CallOut, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import icons from '../constants/icon'
import locations from '../constants/locations'
import provinces from '../constants/provinces'
import ProvPick from './provpick'
import provData from '../assets/data'

const { getAvatar, icon, point } = icons
const { iah } = locations

export default function MobileMap() {
  // const [w, setW] = useState(Dimensions.get('window').width)
  // const [h, setH] = useState(Dimensions.get('window').height)

  const [cent, setCent] = useState({
    latitude: iah.lat,
    longitude: iah.lng,
  })
  const [prov, setProv] = useState('ON')
  const [data, setData] = useState([])
  const [openInfo, setOpenInfo] = useState(false)
  const [active, setActive] = useState(null)
  const [infoBrewery, setInfoBrewery] = useState(null)

  useEffect(() => {
    setData(provData['ON'])
    // setCent({
    //   latitude: iah.lat,
    //   longitude: iah.lng,
    // })
    // ScreenOrientation.addOrientationChangeListener(() => {
    //   const { height, width } = Dimensions.get('window')
    //   setH(height)
    //   setW(width)

    // })
  }, [])

  const pickerCallback = (prov, cent) => {
    if (!prov) return null
    setCent({
      latitude: cent.lat,
      longitude: cent.lng,
    })
    setProv(prov)
    setData(provData[prov])
  }

  const handleInfoClose = () => {
    setOpenInfo(false)
    setActive(null)
    setInfoBrewery(null)
  }

  const handleClick = (props, marker, e, brewery) => {
    handleMapClose()
    setActive(marker)
    setOpenInfo(true)
    setInfoBrewery(brewery)
  }
  
  // if we click the map while a marker is open it will close but will be unhandled
  const handleMapClose = () => openInfo && handleInfoClose()
  if (!cent || !cent.latitude || !cent.longitude) return null
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ProvPick callback={pickerCallback} />
      <MapView
        zoom={9}
        minZoomLevel={3}
        maxZoomLevel={26}
        onPress={handleMapClose}
        loadingEnabled={true}
        zoomTapEnabled={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        scrollEnabled={true}
        toolbarEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          latitude: cent.latitude,
          longitude: cent.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          !data ? null : (
            data.map((brewery, i) => {
              const lat = parseFloat(brewery.Lat)
              const lng = parseFloat(brewery.Lng)
              // if (typeof(brewery.Lat) === 'string') {
              //   console.log('bad region:')
              //   console.log(brewery)
              //   return null
              // }
              return (
                <Marker
                  key={i}
                  title={brewery.Brewery}
                  description={brewery.Brewery}
                  onClick={(props, marker, e,) => handleClick(props, marker, e, brewery)}
                  coordinate={{latitude: lat, longitude: lng}}
                  image={getAvatar(brewery)}
                />
              )
            })
          )
        }
        </MapView>
    </View>
  )
}