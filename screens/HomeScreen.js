import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Text, View } from 'react-native';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log('HomeScreen was executed');

  return (
    <SafeAreaView>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View>
          <Text className='text-gray-400 font-bold text-xs'>Deliver Now!</Text>
          <View className='flex-row items-center justify-start'>
            <Text className='text-xl font-bold'>Current Location</Text>
            <View className='pt-1'>
              <ChevronDownIcon color='#00CCBB' size={20} />
            </View>
          </View>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
