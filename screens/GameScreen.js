
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';



const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    return (
        <View style={styles.screen}>
            <Text>Openent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' />
                <Button title='Greater' />
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80 %'
    }
});

export default GameScreen
