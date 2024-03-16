import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


const RegularBlinds = (props) => {
  return (<View>
    <Icon 
        name={props.name}
        size={props.size}
        color={props.color}
  />
  </View>)
}

export default RegularBlinds



  // const propertiesIcon = {
  //    name: 'gamepad-variant-outline', 
  //    color: 'black',
  //    size: 200
  // };