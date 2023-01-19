import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'home',
        destination: 'Code Street, London, UK',
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, Londo, UK',
    },
];

const NavFavourites = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text>Sick Ngampela..</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavFavourites

const styles = StyleSheet.create({})