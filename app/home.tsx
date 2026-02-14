import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const destinations = [
  {
    id: 1,
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    id: 3,
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
       
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search destinations..."
          style={styles.searchInput}
        />
      </View>

      {/* Popular Destinations */}
      <Text style={styles.sectionTitle}>Popular Destinations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {destinations.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recommended Trips */}
      <Text style={styles.sectionTitle}>Recommended For You</Text>

      {destinations.map((item) => (
        <TouchableOpacity key={item.id} style={styles.verticalCard}>
          <Image source={{ uri: item.image }} style={styles.verticalImage} />
          <View style={{ padding: 10 }}>
            <Text style={styles.verticalTitle}>{item.name}</Text>
            <Text style={styles.verticalSubtitle}>
              Explore the beauty of {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  header: {
   
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
  searchContainer: {
    marginVertical: 20,
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    marginRight: 15,
    width: 140,
  },
  cardImage: {
    width: 140,
    height: 180,
    borderRadius: 15,
  },
  cardText: {
    marginTop: 8,
    fontWeight: "bold",
  },
  verticalCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  verticalImage: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  verticalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  verticalSubtitle: {
    color: "gray",
    marginTop: 5,
  },
});
