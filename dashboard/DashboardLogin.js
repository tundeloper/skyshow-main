import React from 'react';
import { View, Text, TextInput, Button, Platform, Image, TouchableOpacity, Dimensions} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DashboardLogin = ({navigation}) => {

  const isTabletOrMobileDevice = wp('100%') <= 768; // Adjust the threshold for tablets

  return (
    <View style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb}>
      
      {isTabletOrMobileDevice ? (
        //content for tablets and mobile devices
        <>
          <TextInput style={styles.input} placeholder="Username or Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <Button title="Login" onPress={() => {}} />
          <Text style={styles.resetMobile}>For tablets and mobiles</Text>
        </>
      ) : (
        // web and larger screens
        <>
        <img src={require('../assets/images/logo.png')} style={styles.logo} />
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputWeb} placeholder="Username or Email" />
            <TextInput style={styles.inputWeb} placeholder="Password" secureTextEntry />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("DashboardScreen")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.resetWeb}>Reset Password</Text>
        </>
      )}
    </View>
  );
};

const styles = {
    // Mobile devices==========
  containerMobile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    background: '#020817'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  resetMobile: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
//   ====web browsers======
containerWeb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    background: '#020817'
  },
  inputWeb: {
    width: 500, // Adjust for web layout
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
    resetWeb: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  inputContainer: {
    background: '#fff',
    padding: 20,
  },
  button: {
    height: 60,
    background: '#1350E8',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  logo: {
    marginBottom: 30,
  }
};

export default DashboardLogin;
