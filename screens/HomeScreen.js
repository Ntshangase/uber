import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 200, resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs',
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})