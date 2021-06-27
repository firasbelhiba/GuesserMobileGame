import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>
                This is the game screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex 1 means that it will take all the space below the header 
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }
});

export default StartGameScreen
