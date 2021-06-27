import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors'


const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) return

        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (<Text>Chosen Number : {selectedNumber}</Text>)
    }
    return (
        <TouchableWithoutFeedback onPress={
            () => Keyboard.dismiss()
        }>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    Start a new Game !
                </Text>
                <Card style={styles.inputContainer} >
                    <Text>Select a number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetHandler} color={Colors.secondary} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex 1 means that it will take all the space below the header 
        // flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        width: 95
    },
    input: {
        width: 80,
        textAlign: 'center'
    }
});

export default StartGameScreen
