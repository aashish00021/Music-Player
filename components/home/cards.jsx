import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DATA = [
    {
        id: 1,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 2,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 3,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 4,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 5,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 6,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 7,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },
    {
        id: 8,
        album: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        image: {uri: 'https://picsum.photos/seed/picsum/200/300'},
    },

]

export default function Cards({title}) {
  return (
    <View>
        <View>
            <Text style = {{color: '#fff', fontSize:20, fontWeight: 'bold', marginTop: '7%', marginLeft: '4%'}}>{title}</Text>
        </View>
        <View>
            <FlatList 
                data = {DATA}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity style = {{ marginTop: '8%',  alignItems: 'center',  marginLeft: 10, width: 160, }}>
                                <Image source = {item.image} style = {{width: 150, height: 150,borderRadius:10 }} />
                                <View style = {{flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                                    <Text style = {{color: '#fff', fontSize:12, textAlign:'center'}}>{item.album}</Text>
                                    <Text style = {{color: '#AAA', fontSize:10, textAlign:'center', marginTop: 5}}>{item.artist}</Text>
                                </View>
                        </TouchableOpacity>
                    )
                }
                }/>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({})