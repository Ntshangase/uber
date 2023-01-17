import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Sawubona, Mntwana!</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            
        </View>
    </SafeAreaView>
  )
} 

export default NavigateCard

const styles = StyleSheet.create({})