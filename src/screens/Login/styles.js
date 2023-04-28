import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width,height} from "react-native-dimension"
const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white
  },
  nameInput:{
    width:width(90),
    height:height(8),
    alignSelf:"center",
    borderWidth:0.2,
    borderRadius:width(2),
    marginBottom:height(2)
  },
  emailInput:{
    width:width(90),
    height:height(8),
    alignSelf:"center",
    borderWidth:0.2,
    borderRadius:width(2),
    marginBottom:height(4),
  }
});
export default styles;
