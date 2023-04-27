import React, {useEffect} from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './Redux/index';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {OverlayProvider, Chat} from 'stream-chat-react-native';
LogBox.ignoreAllLogs(true);

import {StreamChat} from 'stream-chat';

const API_KEY = 'rcduhcz2d8hb';
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  useEffect(() => {
    const connect = async () => {
      try {
        const userConnected = await client.connectUser(
          {
            id: 'Talha',
            name: 'Talha Yousaf',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-QgBlLOHMcF27Gg6DWSG0PDN2EUwzV9D0A&usqp=CAU',
          },
          client.devToken('Talha'),
        );
        const channel = await client.channel('messaging', 'notjustdev', {
          name: 'notjustdev',
        });
        await channel.watch();
      } catch (e) {
        console.log(e);
      }
    };
    connect();
    return () => client.disconnectUser();
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <OverlayProvider> */}
      <Provider store={store}>
        <Routes />
        <FlashMessage position="bottom" icon="auto" />
      </Provider>
      {/* </OverlayProvider> */}
    </GestureHandlerRootView>
  );
}
