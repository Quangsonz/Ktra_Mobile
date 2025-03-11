import React from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const insightsData = [
    { title: 'Scan new', subtitle: 'Scanned 483', icon: 'scan-outline', bgColor: '#EDEBFE', iconColor: '#6A7FDB' },
    { title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: 'alert-circle-outline', bgColor: '#FFF3ED', iconColor: '#FF8C5B' },
    { title: 'Success', subtitle: 'Checkouts 8', icon: 'checkmark-circle-outline', bgColor: '#E7FAF3', iconColor: '#4AD991' },
    { title: 'Directory', subtitle: 'History 26', icon: 'calendar-outline', bgColor: '#EBF4FF', iconColor: '#6ABEFF' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Hoang Quang Son</Text>
        </View>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }} 
          style={styles.avatar} 
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.grid}>
        {insightsData.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.card, { backgroundColor: item.bgColor }]}
            onPress={() => navigation.navigate('Scan')}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name={item.icon} size={32} color={item.iconColor} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Explore More Section */}
      <View style={styles.exploreContainer}>
        <Text style={styles.exploreTitle}>Explore More</Text>
        <Ionicons name="arrow-forward" size={22} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FAFAFA',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  username: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 15,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#999',
    marginTop: 3,
  },
  exploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
