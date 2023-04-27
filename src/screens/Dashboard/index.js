import React,{useState} from 'react';
import { Text, View } from 'react-native';
// import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
// import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
// import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import {ChannelList,Channel,MessageList,MessageInput} from "stream-chat-react-native"
export default function Dashboard(props) {
  const [selectedChannel,setSelectedChannel] = useState(null);
  // const user = useSelector((state) => state.Auth.user);
  // const dispatch = useDispatch();
  const logoutMethod = async () => {
    // showMessage({
    //   message: 'Logged Out',
    //   description: 'Succfully logged out',
    //   type: 'danger',
    // });
    // dispatch(logout());
  };
  const onSelect = (channel)=>{
    setSelectedChannel(channel)
  }
  return (
    <ScreenWrapper statusBarColor={AppColors.white} barStyle="dark-content">
      {
        selectedChannel!=null  ?
        <Channel channel={selectedChannel}>
          <MessageList />
          <MessageInput />
          {/* <Text onPress={()=>setSelectedChannel(null)}>selectedChannel</Text> */}
        </Channel>
      :
      <ChannelList onSelect={onSelect}/>
      }
    </ScreenWrapper>
  );
}
