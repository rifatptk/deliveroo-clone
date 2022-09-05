import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MinusCircleIcon } from "react-native-heroicons/solid";
import { PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItemWithID,
  removeFromBasket,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setisPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemWithID(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 mb-2`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-500 font-bold">{price}</Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#eee" }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length ? "#00ccbb" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items?.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
