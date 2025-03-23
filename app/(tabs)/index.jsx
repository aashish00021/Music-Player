import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/header'
import { StatusBar } from 'expo-status-bar'
import Cards from '../../components/home/cards'

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <StatusBar style="light" />
      <Header />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: '10%' }}
      >
        <Cards title='Top picks for you' />
        <Cards title='New releases' />
        <Cards title='Top 50 - Songs' />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})