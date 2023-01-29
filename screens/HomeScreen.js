import { View, Text, Button } from "react-native";
import React from "react";

function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-red-500'>HomeScreen</Text>
      <Button title='Click me' color={"black"} />
    </View>
  );
}

export default HomeScreen;
