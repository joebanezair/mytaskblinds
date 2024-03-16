import { View, Text } from 'react-native'
import React from 'react'
import GlobalDesigns from '../../Global/Design/GlobalDesigns'
import jsontext from '../../Global/Texts/Global.json'

const ViewMainPage = () => {
  return (
    <View>
      <Text style={GlobalDesigns.regularTextheader}>{jsontext.headerText.headerMainPage}</Text>
    </View>
  )
}

export default ViewMainPage