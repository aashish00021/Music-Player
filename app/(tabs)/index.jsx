import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/home/header'
import { StatusBar } from 'expo-status-bar'
import Cards from '../../components/home/cards'

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar style="light" />
      <Header />
      <ScrollView>
        <Cards title = 'Top picks for you' />
        <Cards title = 'Top picks for you' />
        <Cards title = 'Top picks for you' />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})