import { StyleSheet } from 'react-native';
import Colors from './Colors';

const fontFamily = "c5"
const defaultColor = Colors.black1

const fontStyles = StyleSheet.create(
  { 
    largeTitle: {
      fontSize: 34,
      fontFamily: fontFamily,
      color: defaultColor
    },
    title1: {
      fontSize: 28,
      fontFamily: fontFamily,
      color: defaultColor
    },
    title2: {
      fontSize:  22,
      fontFamily: fontFamily,
      color: defaultColor
    },
    title3: {
      fontSize:  20,
      fontFamily: fontFamily,
      color: defaultColor
    },
    headline: {
      fontSize:  17,
      fontFamily: "c4",
      color: defaultColor
    },
    body: {
      fontSize:  17,
      fontFamily: fontFamily,
      color: defaultColor
    },
    callout: {
      fontSize: 16,
      fontFamily: fontFamily,
      color: defaultColor
    },
    subhead: {
      fontSize:  15,
      fontFamily: fontFamily,
      color: defaultColor
    },
    footnote: {
      fontSize: 13,
      fontFamily: fontFamily,
      color: defaultColor
    },
    caption1: {
      fontSize:  12,
      fontFamily: fontFamily,
      color: defaultColor
    },
    caption2: {
      fontSize:  11,
      fontFamily: fontFamily,
      color: defaultColor
    }
});

export default fontStyles

  