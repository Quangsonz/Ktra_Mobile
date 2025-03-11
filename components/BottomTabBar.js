import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomTabBar({ activeScreen }) {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={24} color={activeScreen === 'Home' ? '#6A7FDB' : '#AAA'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={24} color={activeScreen === 'Notifications' ? '#6A7FDB' : '#AAA'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItemActive} onPress={() => navigation.navigate('Scan')}>
        <Ionicons name="scan-outline" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
        <Ionicons name="cart-outline" size={24} color={activeScreen === 'Cart' ? '#6A7FDB' : '#AAA'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} color={activeScreen === 'Profile' ? '#6A7FDB' : '#AAA'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 10,
    width: '95%',  
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    alignSelf: 'center',  
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    padding: 10,
  },
  navItemActive: {
    backgroundColor: '#6A7FDB',
    padding: 14,
    borderRadius: 30,
  },
});
