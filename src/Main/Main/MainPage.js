import React from 'react';
import { View, Text, Slider, Alert, ScrollView } from 'react-native';
import MainModel from '../Controller/MainModel';
import TouchableNavigators from '../../Navigators/Touchable Navigators/TouchableNavigators';
import jsontext from '../../Global/Texts/Global.json'
import GlobalDesigns from '../../Global/Design/GlobalDesigns';
import RegularBlinds from '../../Navigators/My Icons/RegularBlinds';

const MainPage = ({navigation}) => {
  const { 
    duration, 
    timeLeft, 
    timerActive, 
    handleSliderChange, 
    handleStartTimer 
  } = MainModel();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const time = `${duration}:00 - Selected Time`;

  const touchableProperties = {
    press: ()=>{
      navigation.navigate("View", {time: duration});
    },
    label: jsontext.onPressComponents.blinds,
    icon: 'archive',
    color: '#fff'
  };

  const propertiesIcon ={
    name: 'controller-classic', 
    color: 'black',
    size: 150
  }
 
  return (<ScrollView>
    <View>
      <View style={GlobalDesigns.head}>
        <Text style={GlobalDesigns.regularTextTitleHeader}>{jsontext.headerText.bs}</Text>
      </View>
      <View style={{backgroundColor:'white'}}>
      <View style={GlobalDesigns.iconCover}>
        <RegularBlinds {...propertiesIcon}/>
      </View>
    <View style={GlobalDesigns.mainBody}>
      <Slider
        minimumValue={3}
        maximumValue={7}
        step={2}
        value={duration}
        minimumTrackTintColor={"#000"}
        thumbTintColor={"#000"}
        onValueChange={handleSliderChange}/>
      <Text style={GlobalDesigns.textSlider}>{time}</Text>
      <TouchableNavigators {...touchableProperties} />
      </View>
     </View>
    </View>
  </ScrollView>);
}

export default MainPage;


