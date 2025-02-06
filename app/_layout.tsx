import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = "home"; // 🏠 Home Icon
          } else if (route.name === "analytics") {
            iconName = "bar-chart"; // 📊 Analytics Icon
          } else if (route.name === "favorites") {
            iconName = "heart"; // ❤️ Favorites Icon
          } else if (route.name === "account") {
            iconName = "user"; // 👤 Account Icon
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#f8f9fa", paddingBottom: 5 },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics", headerShown: false }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites", headerShown: false }} />
      <Tabs.Screen name="account" options={{ title: "Account", headerShown: false }} />
    </Tabs>
  );
}
