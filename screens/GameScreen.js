
import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
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
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    //this will execute after the compone   nt has been rendered 
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds)
        }
    }, [currentGuess, props.userChoice, props.onGameOver])

    const nextgessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don t lie ! ', 'Comon you know that you are cheating ... ', [{ text: 'Sorry ! ', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess

        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currentRounds => currentRounds + 1)
    }
    return (
        <View style={styles.screen}>
            <Text>Openent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress={nextgessHandler.bind(this, 'lower')} />
                <Button title='Greater' onPress={nextgessHandler.bind(this, 'greater')} />
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
