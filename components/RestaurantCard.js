import { View, Text, Image } from 'react-native';
import React from 'react';

const RestaurantCard = () => {
  return (
    <View className='w-72 h-20 rounded-md mr-2 relative bg-white flex-row'>
      <View className='flex-1 bg-slate-400 p-2'>
        <Text clas>Title</Text>
        <Text>Title</Text>
        <Text>Title</Text>
      </View>
      <Image
        source={{ uri: 'https://links.papareact.com/wru' }}
        className='h-20 w-24 absolute right-0 bottom-0'
      />
    </View>
  );
};

export default RestaurantCard;
