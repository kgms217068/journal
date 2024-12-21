import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from "./Navigator/BottomNavigator";
import Inputscreen from './Screen/InputScreen';
import MainScreen from './Screen/MainScreen';



//npx react-native run-android
//인풋 스크린이 모달처럼 아래에서 위로 올라와야함
//상단,하단 내비게이션 탭바 미리 만들어두는거 중요함
//InputScreen을 모달화 시켜서 아래에서 위로 올라오도록 해야함
//모달 안에 전송 이미지 넣어서 클릭하면 작성한 글이 main에 보이도록 해야함
//오늘 날짜를 띄우는 text를 하나 만들고 그걸 touchble opacity로 씌워서 눌렀을때 datepicker가 나오도록 하면 좋겠음
//하단 구현은 쉬워보이는데 상단이 조금 힘들듯?
//datepicker 밑에 캘린더 구현도 해야함


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='mainScreen'>
        <Stack.Screen name='mainScreen' component={MainScreen} />
        <Stack.Screen
          name='InputScreen'
          component={Inputscreen}
        />
        <Stack.Screen name='BottomNavigator' component={BottomNavigator}
          options={{ headerShown: false }} />
      </Stack.Navigator>


    </NavigationContainer>
  )
};





export default App;