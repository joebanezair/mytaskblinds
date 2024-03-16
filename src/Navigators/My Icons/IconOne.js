import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import GlobalDesigns from '../../Global/Design/GlobalDesigns'

const IconOne = (props) => {
  return (<TouchableOpacity style={GlobalDesigns.iconHeaderOne} onPress={props.press}>
    <Icon style={GlobalDesigns.icenone} name={props.icon} size={24} color={props.color} />
    <Text style={GlobalDesigns.touchabletextProperties}>{props.label}</Text>
   </TouchableOpacity>)
}

export default IconOne