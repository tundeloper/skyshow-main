import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';


// styles====
import {
    SliderImageContainer,
    ImageSlide
} from '../styles/styles';

const images = [
  require('../assets/images/man.jpeg'),
  require('../assets/images/man.jpeg'),
  require('../assets/images/man.jpeg'),
];

const ImageSlider = () => {
  return (
    <SliderImageContainer >
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ImageSlide source={item}/>
        )}
      />
    </SliderImageContainer>
  );
};

export default ImageSlider;
