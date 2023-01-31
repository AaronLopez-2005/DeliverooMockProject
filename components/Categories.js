import { Text, ScrollView, Platform } from 'react-native';
import React from 'react';
import CatergoryCard from './CatergoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}

      <CatergoryCard />
      <CatergoryCard />
      <CatergoryCard />
      <CatergoryCard />
      <CatergoryCard />
      <CatergoryCard />
    </ScrollView>
  );
};

export default Categories;
