import React from 'react'
import { View } from 'react-native'
import WebView from 'react-native-webview'

function Chat() {
  return (
   <View style={{flex: 1}}>
        <WebView source={{uri: "https://tawk.to/chat/651473cb0f2b18434fdaf2cb/1hbbu8m4i"}}/>
   </View>
  )
}

export default Chat
