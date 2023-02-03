import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import PreviousRestaurants from '../components/PreviousRestaurants';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log('HomeScreen was executed');

  return (
    <SafeAreaView edges={['top', 'left', 'right']} className='bg-white pt-4'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-10 w-10 bg-gray-300 rounded-full'
        />

        <View className='flex-1'>
          <Text className='text-gray-400 font-bold text-xs'>Deliver Now!</Text>
          <View className='flex-row items-center'>
            <Text className='text-xl font-bold'>Current Location</Text>
            <View className='pt-1 '>
              <ChevronDownIcon color='#00CCBB' size={20} />
            </View>
          </View>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search Bar */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <View className='bg-gray-100 flex-row flex-1 rounded-md space-x-2 items-center p-2'>
          <MagnifyingGlassIcon color={'#999'} size={26} />
          <TextInput
            className='flex-1'
            keyboardType='default'
            placeholder='Restaurants and cuisines'
            keyboardAppearance='default'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' size={30} />
      </View>

      {/* Body  */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{ paddingBottom: 1000 }}
      >
        <View>
          <Categories />
        </View>

        <View>
          <PreviousRestaurants />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
