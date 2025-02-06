import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const[textInput, setTextInput] = useState('');
  const[goals, setGoals] = useState([]);

  const handleChange = (input) => {
    setTextInput(input);
  }
  const handleAdd = () =>{
    setGoals(currentGoals => [...currentGoals, textInput]);
  }
  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{padding:30,justifyContent:'space-between', flexDirection:'row'}}>
        <TextInput placeholder='Add your task'
        placeholderTextColor={'black'}
        onChangeText={handleChange}
        value={textInput}
        style = {{borderBottomColor:'black', borderBottomWidth:1, width:'80%'}}
        />
        <Button title='Add' onPress={handleAdd}/>
      </View>
      <View>
        <FlatList 
          data={goals}
          renderItem={e => {
            return(
              <Text>{e.item}</Text>
            )
          }}
        />
      </View>
    </Safe