import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const GameOverScreen = (props) => {
    return (
        <View>
            <Text>Game over ! </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center'
    }
});

export default GameOverScreen
