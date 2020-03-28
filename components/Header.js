import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#768BFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#EBEBEB',
        fontSize: 18
    }
})

export default Header