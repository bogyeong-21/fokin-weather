import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Loading the fucking Weather!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'powderblue',
        paddingHorizontal: 30,
        paddingVertical: 150
    },
    text: {
        fontSize: 40
    }
});