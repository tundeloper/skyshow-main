import React from 'react';
import { View, Text, TextInput, Button, Platform, Image, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// ======icon==============
import { Octicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AntDesignIcons from 'react-native-vector-icons/AntDesign';


const DashboardScreen = () => {
  const isTabletOrMobileDevice = wp('100%') <= 768; // Adjust the threshold for tablets

  return (
    <View style={isTabletOrMobileDevice ? styles.contentContainerMobile : styles.contentContainerWeb}>
      
      {isTabletOrMobileDevice ? (
        //content for tablets and mobile devices
        <>
          <TextInput style={styles.input} placeholder="Username or Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <Button title="Login" onPress={() => {}} />
          <Text style={styles.resetMobile}>For tablets and mobiles</Text>
        </>
      ) : (
 //==================================== web and larger screens============================================================
        <>
       <View style={styles.contentContainerWeb}>
        {/* ======navigation bar========= */}
          <View style={styles.asideContainerWeb}>
            <View style={styles.logoContainer}>
              <img src={require('../assets/images/logo.png')} style={styles.logo} />
              <Text style={styles.logoTitle}>SkyshowNg</Text>
            </View>
            <View style={styles.navigationBar}>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Dashboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Users</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Transactions</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.navItem}>
                  <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                  <Text style={styles.navText}>Messages</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Analytics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Verification</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Products</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Rates</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Tutorials</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <AntDesignIcons name="dashboard" size={24} color="#8B9CC8" />
                <Text style={styles.navText}>Settings</Text>
              </TouchableOpacity>
              <View style={styles.logoutContainer}>
                <TouchableOpacity style={styles.logout}>
                  <AntDesignIcons name="dashboard" size={24} color="red" />
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mainContainerWeb}>
          <Text>Main container</Text>
          </View>
          <View style={styles.containerRightWeb}>
          <Text>right container</Text>
          </View>
       </View>
        </>
      )}
    </View>
  );
};

const styles = {
    // Mobile devices==========
  contentContainerMobile: {
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
contentContainerWeb: {
    flexDirection: 'row',
    background: '#020817',
    width: '100%',
  },
  asideContainerWeb: {
    flexBasis: '15%',
    backgroundColor: '#102249', 
    padding: 10,
    borderRadius: 8,
    padding: 20,
  },
  mainContainerWeb: {
    flex: 1,
    marginRight: 20,
  },
  containerRightWeb: {
    backgroundColor: '#102249',
    flexBasis: '20%',
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  logoTitle: {
    color: '#fff',
    fontSize: 20,
  },
  navigationBar: {
    paddingTop: 30,
    gap: 15,
  },

  navItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  navText: {
    fontSize: 15,
    color: '#8B9CC8',
  },
  logoutContainer: {
    paddingTop: 20,
  },
  logout: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  logoutText: {
    color: 'red',
    fontSize: 15,
  },
};

export default DashboardScreen;
