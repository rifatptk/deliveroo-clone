import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView
      style={styles.safeArea}
      className="bg-[#00ccbb] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/home_delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80 rounded-lg object-cover"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
