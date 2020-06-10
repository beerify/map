import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import icons from '../constants/icon'
import locations from '../constants/locations'
import provData from '../assets/data'

const BrewPick = lazy(() => import('./BrewPick'))
const CityPick = lazy(() => import('./CityPick'))
const ProvPick = lazy(() => import('./ProvPick'))

const { getAvatar, getBanner, icon, point } = icons
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

function WebMap(props) {
  if (Platform.OS !== 'web') return null
  const [cent, setCent] = useState(locations.iah)
  const [prov, setProv] = useState('ON')
  const [data, setData] = useState([])
  const [openInfo, setOpenInfo] = useState(false)
  const [active, setActive] = useState(null)
  const [infoBrewery, setInfoBrewery] = useState(null)
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('All')
  const [filteredData, setFilteredData] = useState([])
  const [zoom, setZoom] = useState(12)

  // set initial state
  useEffect(() => {
    const initData = provData['ON']
    setData(initData)
    setFilteredData(initData)
    setUniqueCities(initData)
  }, [])

  // maybe do this on init in assets/data???
  const setUniqueCities = data => {
    const list = data.map(o => o.city).filter(o => !!o)
    const uniq = [...new Set(list)].sort()
    setCities(uniq)
  }

  const pickerCallback = (newProv, cent) => {
    if (!newProv || newProv === prov) return
    setCent(cent)
    setProv(newProv)
    const upData = provData[newProv]
    setData(upData)
    setFilteredData(upData)
    setUniqueCities(upData)
  }

  const brewCallback = (val) => {
    setCent({
      lat: val.lat,
      lng: val.lng
    })
  }

  const cityCallback = (city) => {
    if (!city) return
    handleInfoClose()
    if (city === 'All') {
      setFilteredData(data)
      setCent(locations.iah)
      setCity('All')
      return
    }
    setCity(city)
    const filtered = data.filter(o => o.city === city)
    setFilteredData(filtered)
    const { lat, lng } = filtered[0]
    setCent({lat, lng})
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
      <Suspense fallback={null}>
        <ProvPick callback={pickerCallback} />
      </Suspense>
      <Suspense fallback={null}>
        <CityPick data={data} cities={cities} callback={cityCallback} />
      </Suspense>
      <Suspense fallback={null}>
        {
          city === 'All' || filteredData.length === 1 ? null : (
            <BrewPick breweries={filteredData} callback={brewCallback} />
          )
        }
      </Suspense>
      <Text>
        <Map
          google={props.google}
          style={gmap}
          zoom={zoom}
          center={cent}
          initialCenter={locations.iah}
          onClick={handleMapClose}
        >
          <InfoWindow
            visible={openInfo}
            marker={active}
            onClose={handleInfoClose}
            children={null}
          >
            {
              infoBrewery ? (
                <View>
                  {
                    infoBrewery.banner ? (
                      <img
                        style={{height: 100}}
                        src={getBanner(infoBrewery)}
                      />
                    ) : null
                  }

                  <h3>
                    {infoBrewery?.name}
                  </h3>
                  <h5>
                    Status: {infoBrewery.status}
                  </h5>
                  <h4>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={infoBrewery.website}
                    >
                      website
                    </a>
                  </h4>
                  <h5>
                    {infoBrewery.description}
                  </h5>
                  <h5>
                    {infoBrewery.address}
                  </h5>
                  <h5>
                    {infoBrewery.tel}
                  </h5>
                </View>
              ) : <Fragment></Fragment>
            }

            </InfoWindow>

          {
            !filteredData ? null : (
              filteredData.map((brewery, i) => (
                <Marker
                  key={i}
                  title={brewery.name}
                  onClick={(props, marker, e,) => handleClick(props, marker, e, brewery)}
                  position={{lat: brewery.lat, lng: brewery.lng}}
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