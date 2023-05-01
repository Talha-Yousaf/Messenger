import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
    backgroundColor: AppColors.green,
    height: verticalScale(50),
    width: scale(100),
    backgroundColor:"red",
    backgroundColor:"red"
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  }
});
export default styles;
