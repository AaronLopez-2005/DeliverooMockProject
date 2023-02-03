import { View, Text, Image } from 'react-native';
import React from 'react';

const CategoryCard = () => {
  return (
    <View className='bg-white rounded mr-2'>
      <Image
        source={{ uri: 'https://links.papareact.com/wru' }}
        className=' h-12 bg-gray-200'
        style={{ width: 72, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      />
      <Text className='text-black pl-1'>Test</Text>
    </View>
  );
};

export default CategoryCard;
