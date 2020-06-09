import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import ProvPick from './provpick'
import locations from '../constants/locations'

// const ON = require('../data/ON.json')
// console.log(ON)

const { iah } = locations
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    width: width * 0.9,
  },
})

const gmap = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}
const point = 16
const icon = 32
const generic = 'https://freeiconshop.com/wp-content/uploads/edd/beer-solid.png'

// todo generic icon instead of null
const getAvatar = ({Twitter}) => {
  if (!Twitter || !Twitter.length) return generic
  if (!Twitter[0].avatar) return generic
  return Twitter[0].avatar
}


function WebMap(props) {
  const [cent, setCent] = useState(locations.iah)
  const [prov, setProv] = useState('ON')
  const [data, setData] = useState([])
  const [openInfo, setOpenInfo] = useState(false)
  const [active, setActive] = useState(null)
  const [infoBrewery, setInfoBrewery] = useState(null)

  // set initial state
  useEffect(() => {
    const data = require(`../data/ON.json`)
    setData(data)
  }, [])

  const pickerCallback = (prov, cent) => {
    setCent(cent)
    setProv(prov)
    const data = require(`../data/${prov}.json`)
    setData(data)
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


  return (
    <View id='map' style={styles.container}>
      <ProvPick callback={pickerCallback} />
      <Text>
        <Map
          google={props.google}
          style={gmap}
          zoom={7}
          center={cent}
          initialCenter={locations.iah}
          onClick={handleMapClose}
        >
          <InfoWindow
            visible={openInfo}
            marker={active}
            onClose={handleInfoClose}
            o
          >
            <div>
              {infoBrewery?.Brewery}
            </div>
            </InfoWindow>

          {
            !data ? null : (
              data.map((brewery, i) => (
                <Marker
                  key={i}
                  title={brewery.Brewery}
                  onClick={(props, marker, e,) => handleClick(props, marker, e, brewery)}
                  position={{lat: brewery.Lat, lng: brewery.Lng}}
                  icon={{
                    url: getAvatar(brewery),
                    anchor: new google.maps.Point(point, point),
                    scaledSize: new google.maps.Size(icon, icon)
                  }}
                />
              ))
            )
          }
        </Map>
      </Text>

    </View>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBX9vQ8Vor-iw4ZZvrTR5STac1f0R9RsiQ'
})(WebMap)