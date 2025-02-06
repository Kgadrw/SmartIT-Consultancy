import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const recommendations = [
  {
    id: "1",
    company: "Pinterest, Inc.",
    companyImage: "https://pngimg.com/uploads/pinterest/pinterest_PNG62.png",
    jobTitle: "Motion Designer",
    jobDetails: "Senior . Fulltime . Remote",
    payment: "$7k/month",
  },
  {
    id: "2",
    company: "Google",
    companyImage: "https://th.bing.com/th/id/R.16597b58fb4d4fa8ebcf5a013fc19b0a?rik=a0DcRRp3bMzLow&pid=ImgRaw&r=0",
    jobTitle: "Product Manager",
    jobDetails: "Mid-level . Fulltime . Hybrid",
    payment: "$9k/month",
  },
  {
    id: "3",
    company: "Apple",
    companyImage: "https://logosmarcas.net/wp-content/uploads/2020/04/Apple-Logo.png",
    jobTitle: "UI/UX Designer",
    jobDetails: "Junior . Fulltime . On-site",
    payment: "$6k/month",
  },
];

const recentJobs = [
  {
    id: "1",
    company: "Google",
    jobTitle: "Product Designer",
    workStyle: "Mid-level . Fulltime . Remote",
    timeAgo: "2 hours ago",
    payment: "$8k/month",
  },
];

const renderRecommendationItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardLeft}>
        <View style={styles.iconContainer}>
          <Image source={{ uri: item.companyImage }} style={styles.companyImage} />
        </View>
        <Text style={styles.companyName}>{item.company}</Text>
      </View>
      <Icon name="bookmark-outline" size={30} color="#007bff" style={styles.saveIcon} />
    </View>

    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
    <Text style={styles.jobDetails}>{item.jobDetails}</Text>
    <View style={styles.cardFooter}>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply Now</Text>
      </TouchableOpacity>
      <Text style={styles.payment}>{item.payment}</Text>
    </View>
  </View>
);

const renderRecentJobItem = ({ item }) => (
  <View style={styles.recentJobCard}>
    <View style={styles.recentJobHeader}>
      <Image source={{ uri: "https://th.bing.com/th/id/R.16597b58fb4d4fa8ebcf5a013fc19b0a?rik=a0DcRRp3bMzLow&pid=ImgRaw&r=0" }} style={styles.recentCompanyImage} />
      <View style={styles.recentJobInfo}>
        <Text style={styles.recentJobTitle}>{item.jobTitle}</Text>
        <Text style={styles.recentWorkStyle}>{item.workStyle}</Text>
      </View>
    </View>
    <View style={styles.recentJobFooter}>
      <Text style={styles.recentPayment}>{item.payment}</Text>
      <Text style={styles.recentTimeAgo}>{item.timeAgo}</Text>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.boldText}>Leslie Alexander</Text>
        </View>
        <Icon name="bell" size={35} color="#fff" style={styles.notificationIcon} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search job, company, etc..."
          placeholderTextColor="#888"
        />
        <Icon name="magnify" size={25} color="#888" style={styles.searchIcon} />
      </View>

      <FlatList
        data={recommendations}
        renderItem={renderRecommendationItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />

      <FlatList
        data={recentJobs}
        renderItem={renderRecentJobItem}
        keyExtractor={(item) => item.id}
        style={styles.recentJobList}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#386CCCFF",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  leftSection: {
    justifyContent: "flex-start",
  },
  helloText: {
    fontSize: 14,
    color: "#fff",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  notificationIcon: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  searchBox: {
    width: "80%",
    height: 40,
    paddingLeft: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  searchIcon: {
    position: "absolute",
    left: 50,
  },
  cardList: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  card: {
    backgroundColor: "#fff",
    marginRight: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 250,
    height: 220,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  companyImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  saveIcon: {
    marginTop: 5,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  jobDetails: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  applyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  applyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  payment: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
  recentJobList: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  recentJobCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    height: 90,
  },
  recentJobHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentCompanyImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  recentJobInfo: {
    marginLeft: 10,
  },
  recentJobTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  recentWorkStyle: {
    fontSize: 12,
    color: "#888",
  },
  recentJobFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  recentPayment: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#007bff",
    left: 20,
    top: 5,
  },
  recentTimeAgo: {
    fontSize: 12,
    color: "#888",
  },
});
