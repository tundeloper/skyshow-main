import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const  UsersScreen = () =>  {
  return (
    <View style={styles.container}>
      <Text>Users screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default UsersScreen ();