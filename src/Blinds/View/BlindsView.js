import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import GlobalDesigns from '../../Global/Design/GlobalDesigns';
import MainModel from '../../Main/Controller/MainModel';
import IconOne from '../../Navigators/My Icons/IconOne';
import jsontext from '../../Global/Texts/Global.json';
import MyBlinds from './MyBlinds';

const BlindsView = ({ navigation, route }) => {
  const { handleSliderChange, handleStartTimer, timeLeft } = MainModel();
  const { time } = route.params;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const timer = `Blinds`; 
  const timersent = `${formattedTime}`; 

  useEffect(() => {
    handleSliderChange(time)
    handleStartTimer();  
  }, []); 

  const touchableProperties = {
    press: ()=>{
      navigation.goBack();
    },
    label: timer,
    icon: 'arrow-left-bold',
    color: '#fff'
  };

  // sending the data to another file MyBlinds
  const sendData = {
    time: time,
    timer: timersent,
  }

  return (<>
    <IconOne {...touchableProperties} />
    <View style={GlobalDesigns.blindsBody}>
     <MyBlinds {...sendData}/>
    </View>
  </>);
}

export default BlindsView;
 