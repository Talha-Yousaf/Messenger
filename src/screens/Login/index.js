import React,{useState} from 'react';
import { Text, View,TextInput } from 'react-native';
// import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
// import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
// import { login } from '../../Redux/Actions/Auth';
// import { setLoaderVisible } from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import {width} from "react-native-dimension";

export default function Dashboard(props) {
  const [userName,setUserName] = useState();
  const [fullName,setFullName] = useState();

  // const user = useSelector((state) => state.Auth.user);
  // const dispatch = useDispatch();
  const loginMethod = () => {
    // dispatch(setLoaderVisible(true));
    // setTimeout(() => {
    //   showMessage({
    //     message: 'Success',
    //     description: 'Succfully logged In',
    //     type: 'success',
    //   });
    //   dispatch(setLoaderVisible(false));
    //   dispatch(login({ userName: 'John Doe' }));
    // }, 1500);
  };
  // console.log(fullName);hgfhfhgjh
  // console.log(userName);
  return (
    <ScreenWrapper statusBarColor={AppColors.white} barStyle='dark-content'>
      <View style={styles.mainViewContainer}>
          <TextInput
          onChangeText={(text)=>setUserName(text)}
          style={styles.nameInput} placeholder='UserName'/>
          <TextInput
          onChangeText={(text)=>setFullName(text)}
          style={styles.emailInput} placeholder='FullName'/>
        <Button title="Login" onPress={loginMethod} />
      </View>
    </ScreenWrapper>
  );
}
