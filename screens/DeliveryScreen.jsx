import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const DeliveryScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>DeliveryScreen</Text>
    </SafeAreaView>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
