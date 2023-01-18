import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
      {/**Top half */}
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      {/**Bottom half */}
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})