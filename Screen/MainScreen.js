import React,{useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Button } from "react-native";
import DatePicker from 'react-native-date-picker';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HashTag from '../Screen/HashTag';
import Settings from '../Screen/Settings';
import Search from '../Screen/Search';
import Galary from '../Screen/Galary';


const Tab = createBottomTabNavigator();

function MainScreen({ navigation }) {


  const [date, setDate] = useState(new Date());
  const [open,setOpen] = useState(false);

  // const now = dayjs();
  // console.log(now.format('YYYY-MM-DD HH:mm:ss'));
 //년월일 이 나오도록 해야함

  return (
    <SafeAreaView>
      <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
      modal 
      date={date} 

      onDateChange={setDate}
      open={open}
      onConfirm={(date) => {
        setOpen(false)
        setDate(date)
      }}
      onCancel={() => {
        setOpen(false)
      }}
      //mode="date"
      />

       
      </View>
      <View>


        <TouchableOpacity onPress={() => navigation.navigate('InputScreen')}>
          <View style={styles.plusButton}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>

 
      </View>

      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  plusButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#EEDAA8",
    top: 150,
    left: 320

  },
  plus: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    top: 15
  },

});
export default MainScreen;