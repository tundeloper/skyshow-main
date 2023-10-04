import React from 'react'
import { Text, View } from 'react-native'

function TemporaryScreen({navigation}) {
  return (
    <View>
        <View onPress={navigation.navigate("MainContent")}>
            <Text>Go to home </Text>
        </View>
    </View>
  )
}

export default TemporaryScreen
