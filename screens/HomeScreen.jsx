import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SanityClient from "../sanity";

export default function HomeScreen() {
  const [featuredCategories, setfeaturedCategories] = useState([]);
  //hide default header--------------
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  //---------------------------------

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "featured"]{...,restaurants[]->{...,dishes[]->}}`
    )
      .then((data) => {
        setfeaturedCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5" style={styles.safeArea}>
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/me.jpg")}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Loacation <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturants & Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* categories */}
        <Categories />
        {/* featured rows */}
        {featuredCategories?.map((cat) => (
          <FeaturedRow
            key={cat._id}
            id={cat._id}
            title={cat.name}
            description={cat.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
