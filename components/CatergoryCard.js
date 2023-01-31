import { View, Text, Image } from 'react-native';
import React from 'react';

const CatergoryCard = () => {
  return (
    <View className='bg-black p-3 m-3'>
      <Text className='text-white'>CatergoryCard</Text>
      <Image source={require('../assets/icon.png')} className='w-7 h-7' />
    </View>
  );
};

export default CatergoryCard;
