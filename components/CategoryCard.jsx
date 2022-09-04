import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard({ imageUrl, title }) {
  return (
    <TouchableOpacity className="relative mr-2 ">
      <Image source={{ uri: imageUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
