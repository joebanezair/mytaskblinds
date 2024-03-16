import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalDesigns from '../../Global/Design/GlobalDesigns'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // for FontAwesome icons

const TouchableNavigators = (props) => {
  return (<TouchableOpacity style={GlobalDesigns.basicTouchableOpacity} onPress={props.press}>
    <Icon style={GlobalDesigns.icen} name={props.icon} size={17} color={props.color} />
    <Text style={GlobalDesigns.touchabletextProperties}>{props.label}</Text>
   </TouchableOpacity>)
}

export default TouchableNavigators

