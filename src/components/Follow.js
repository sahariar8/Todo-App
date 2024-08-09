import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

const Follow = () => {
  return (
    <View style={{ alignItems:'center' }} >
      <Image source={ require("../../assets/todo.png")} style={{ height:300, width:300 }} />
      <Text>Start Adding Your Task</Text>
    </View>
  )
}

export default Follow

const styles = StyleSheet.create({})