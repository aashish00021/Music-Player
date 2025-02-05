import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{padding:30}}>
        <TextInput placeholder='Add' style = {{borderBottomColor:'black', borderBottomWidth:1}}/>
        <Button title='Add'/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})