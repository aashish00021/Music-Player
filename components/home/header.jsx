import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function Header() {
  return (
    <View style = {{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal: 20, marginTop: 10}} >
        <View>
            <Text style = {{color: '#fff', fontSize:30, fontWeight: 'bold'}}>Home</Text>
        </View>
        <View>
            <TouchableOpacity>
                <FontAwesome name="user-circle-o" size={27} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})