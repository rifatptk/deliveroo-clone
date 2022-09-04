import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

export default function Categories() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category" ]`)
      .then((data) => {
        setcategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    sanityClient;
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category card */}
      {categories?.map((cat) => (
        <CategoryCard
          key={cat._id}
          imageUrl={urlFor(cat.iamge).width(200).url()}
          title={cat.name}
        />
      ))}

      {/* <Text>Categories</Text> */}
    </ScrollView>
  );
}
