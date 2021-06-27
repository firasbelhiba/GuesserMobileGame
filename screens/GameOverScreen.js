import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../components/Card';


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Game over ! </Text>
                <Text>Number of rounds : {props.roundsNumber} </Text>
                <Text>Number was : {props.userNumber}</Text>
                <Button title='Restart' onPress={props.onRestart} />
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOverScreen
