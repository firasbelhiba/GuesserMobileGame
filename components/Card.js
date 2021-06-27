import React from 'react'
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        // The shadow props only work on IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // To acitvate this add we have to add this prop which works only on android
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: 10
    }
});
export default Card
