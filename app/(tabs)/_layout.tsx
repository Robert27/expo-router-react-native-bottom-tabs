import { Tabs } from "@/components/bottom-tabs";
import { Platform } from "react-native";

export default function TabLayout() {
  const isAndroid = Platform.OS === "android";
  return (
    <Tabs
    tabBarInactiveTintColor="#C57B57"
    tabBarActiveTintColor="#F7DBA7"
    barTintColor="#1E2D2F"
    rippleColor="#F7DBA7"
    activeIndicatorColor="#041F1E"
    sidebarAdaptable
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            isAndroid ? require('../../assets/icons/home.svg') : { sfSymbol: "house" }
           ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            isAndroid ? require('../../assets/icons/map.svg') : { sfSymbol: "magnifyingglass" }
           ),
        }}
      />
    </Tabs>
  );
}
