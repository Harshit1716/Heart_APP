import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import Slide from './Slide';
import Carousel from 'react-native-snap-carousel';
import {SIZES} from '../resources';

const {width} = Dimensions.get('window');

const Banner = ({data}) => {
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState();
  const flatListRef = useRef(null);

  const fetchData = async () => {
    await fetch('http://heartapp.technochords.com/api/get-banners')
      .then(res => res.json())
      .then(res => {
        console.log(res?.response, 'BHSDK');
        setDataList(res?.response);
      })
      .catch(er => {
        console.log(er, 'SDSDA');
      });
  };

  useEffect(() => {
    fetchData();
    // Function to autoplay the carousel
    const autoplayCarousel = setInterval(() => {
      // flatListRef.current?.snapToNext(); // Snap to the next item
    }, 3000);

    // // Clear the autoplay interval on component unmount
    // return () => clearInterval(autoplayCarousel);
  }, []);

  const scrollToNextIndex = currentIndex => {
    try {
      if (
        currentIndex < dataList.length - 1 &&
        dataList &&
        dataList.length > 0
      ) {
        flatListRef.current.scrollToIndex({index: currentIndex + 1});
      }
    } catch (er) {
      console.log(er);
    }
  };

  let currentIndex = 0;
  // let interval;

  const startScrolling = () => {
    interval = setInterval(() => {
      scrollToNextIndex(currentIndex);
      currentIndex++;
      if (currentIndex >= dataList.length) {
        currentIndex = 0;
      }
    }, 3000); // Adjust the interval (in milliseconds) as needed
  };

  useEffect(() => {
    console.log(dataList);
    if (dataList && dataList?.length > 0) {
      startScrolling();
    }
  }, [dataList]);

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
  return (
    // <Carousel
    //   ref={flatListRef}
    //   loop={true}
    //   autoplay={true}
    //   data={dataList}
    //   renderItem={({item}) => {
    //     return <Slide item={item} />;
    //   }}
    //   sliderWidth={SLIDER_WIDTH}
    //   itemWidth={ITEM_WIDTH}
    // />
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      ref={flatListRef}
      data={dataList}
      style={{
        width: SIZES.width,
      }}
      renderItem={({item}) => {
        return <Slide item={item} />;
      }}
    />
    // <Slide item={data[0]} />
  );
};

const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default Banner;