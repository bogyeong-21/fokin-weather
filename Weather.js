import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import propTypes from "prop-types";

export default function Weather({ temp, description, icon_num }) {
    // console.log(temp);
    // console.log(description);
    // console.log(icon_num);
    return (
        <View style={styles.container}>
            <View style={styles.main1}>
                <Image style={styles.icon_img} source={{ uri: `http://openweathermap.org/img/wn/${icon_num}@2x.png` }} />
                <Text style={styles.temp}> {temp}{"\u2103"}</Text>
            </View>
            <View style={styles.main2}>
                <Text style={styles.descript}>{description.toUpperCase()}</Text>
            </View>
            <View style={styles.main3}>
                <Text style={styles.detail}>Write some more detail</Text>
            </View>
        </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    description: propTypes.oneOf[
        "clear sky",
        "few clouds",
        "scattered clouds",
        "broken clouds",
        "shower rain",
        "rain",
        "thunderstorm",
        "snow",
        "mist",
        "haze"],
    icon_num: propTypes.string
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc"
    },

    main1: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },

    main2: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 10,
        alignItems: "center",
        // borderColor: "black",
        // borderWidth: 1,
    },

    main3: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 10,
        alignItems: "center",
        // borderColor: "black",
        // borderWidth: 1,
    },

    temp: {
        fontSize: 30,
    },

    icon_img: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },

    descript:{
        fontSize: 50
    },
    
    detail: {
        fontSize: 20
    }
});