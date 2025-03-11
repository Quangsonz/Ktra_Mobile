import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomTabBar from '../components/BottomTabBar';

export default function ScanScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} 
      >
        <Ionicons name="chevron-back" size={28} color="#333" />
      </TouchableOpacity>

      {/* Hiệu ứng khung Scan */}
      <View style={styles.scanContainer}>
        <View style={styles.scanBox}>
          <Image 
            source={require('../assets/orange_juice.png')} 
            style={styles.scannedImage} 
          />
        </View>
        {/* 4 góc hiệu ứng scan */}
        <View style={styles.scanCorners}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image 
          source={require('../assets/orange_juice.png')} 
          style={styles.productImage} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.productBrand}>Hoang Quang Son</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* BottomTabBar */}
      <BottomTabBar activeScreen="Scan" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  scanContainer: {
    marginTop: 100, 
    alignItems: 'center',
  },
  scanBox: {
    width: 280,
    height: 450, 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E5D5',
    overflow: 'hidden', 
  },
  scannedImage: {
    width: '120%',  
    height: '120%',
    resizeMode: 'cover', 
  },
  scanCorners: {
    position: 'absolute',
    width: 280,
    height: 450,
    borderRadius: 20,
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#FFF',
    borderWidth: 4,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopRightRadius: 20,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 20,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 20,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  productInfo: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 30, // Đưa xuống dưới
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 60, 
    height: 60,
    borderRadius: 12,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
  productName: {
    fontSize: 18,  
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#6A7FDB',
    padding: 12,
    borderRadius: 25,
  },
});
