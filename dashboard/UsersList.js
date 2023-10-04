import React , {useState} from 'react';
import { View, Text, TextInput, Button, Platform, Image, TouchableOpacity, FlatList} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// ======icon==============
import { Octicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

// ====dummy data=====
import DummySets from './Dummy data/DummySets';

const UsersList = () => {
//   =====user data imports=====
const [selectedUsers, setSelectedUsers] = useState([]);

const toggleUserSelection = (userId) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userId)) {
        return prevSelectedUsers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedUsers, userId];
      }
    });
  };
  const renderUserItem = ({ item }) => {
    const isSelected = selectedUsers.includes(item.id);

    return (
        <View style={styles.item}>
            <View >
                <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            </View>
            
             <View> 
                <Text style={styles.title}>{item.username}</Text>
             </View>
             <View> 
                <Text style={styles.title}>{item.name}</Text>
             </View>
             <View> 
                <Text style={styles.title}>{item.email}</Text>
             </View>
             <View> 
                <Text style={styles.title}>{item.phoneNumber}</Text>
             </View>
             <View> 
                <Text style={styles.title}>{item.role}</Text>
             </View>
                <TouchableOpacity
                    style={{
                        marginLeft: 'auto',
                        backgroundColor: isSelected ? 'blue' : 'gray',
                        padding: 5,
                        borderRadius: 5,
                    }}
                    onPress={() => toggleUserSelection(item.id)}
                    >
                    <Text style={{ color: 'white' }}>{isSelected ? 'Disabled' : 'Disable'}</Text>
            </TouchableOpacity>
        </View>
    //   <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
    //     <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
    //     <Text>{item.name}</Text>
        // <TouchableOpacity
        //   style={{
        //     marginLeft: 'auto',
        //     backgroundColor: isSelected ? 'blue' : 'gray',
        //     padding: 5,
        //     borderRadius: 5,
        //   }}
        //   onPress={() => toggleUserSelection(item.id)}
        // >
        //   <Text style={{ color: 'white' }}>{isSelected ? 'Selected' : 'Select'}</Text>
        // </TouchableOpacity>
    //   </View>
    );
  };

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
// =================================================web and larger screens===================================================
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
            <Text style={styles.UserTitle}>USERS PAGE</Text>
            <View>
                <FlatList
                    data={DummySets.UsersData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderUserItem}
                />
                <TouchableOpacity
                    style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 10 }}
                    onPress={() => console.log('Selected Users:', selectedUsers)}
                >
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>
                </View>
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
    overflow: 'hidden',
  },
  mainContainerWeb: {
    flex: 1,
    padding: 20, 
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
//   ==============Main container styles============
UserTitle:{
    color: '#8B9CC8',
    fontSize: 20,
    fontWeight: 600,
},
};

export default UsersList;
