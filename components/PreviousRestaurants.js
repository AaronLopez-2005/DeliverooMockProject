import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const PreviousRestaurants = () => {
  return (
    <View>
      <View className='flex-row mx-4 mb-3 items-center'>
        <Text className='text-lg font-bold flex-1'>Order Again</Text>
        <ArrowRightIcon color={'#00CCBB'} size={18} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
      >
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </View>
  );
};

export default PreviousRestaurants;
