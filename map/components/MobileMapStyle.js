import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingTop: 5,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  mapStyle: {
    width: width * .86,
    height: height * 0.76,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    height: 60,
    width: '80%',
  },
  pickerWrapper: {
    borderColor: '#fcfcfc',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 4,
 },
 pickerContent: {
    color: 'black',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    height: 60,
    width: 250,
 },
})
