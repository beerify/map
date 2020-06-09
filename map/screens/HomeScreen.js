import * as React from 'react'
import { Linking, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import { MonoText } from '../components/StyledText'
import styles from './HomeStyle'

export default function HomeScreen() {
  const ghLink = () => Linking.openURL('https://github.com/beerify/map')
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>
              Beer Map Open Source Project
            </MonoText>
          </View>
          <Text style={styles.getStartedText} onPress={ghLink}>
            <FontAwesome
              name='github'
              size={30}
              style={{ color: 'red' }}
            />
            &nbsp;
            Visit GitHub Project
          </Text>
        </View>
      </ScrollView>
      <View style={styles.tabBarInfoContainer}>
        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            Contributions Are Welcome
          </MonoText>
        </View>
      </View>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}
