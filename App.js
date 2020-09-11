import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_key = "e3052b07fa82365cbb2df3641d71a134";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(longitude, latitude) => {
    try{
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`);
      console.log(data);
      this.setState({isLoading: false, main: data.main, description: data.weather[0].description, icon: data.weather[0].icon});
    }
    catch(err) {
      Alert.alert("Network error");
      console.log(err);
    }
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      // const location = await Location.getCurrentPositionAsync();
      const { coords:{longitude, latitude} } = await Location.getCurrentPositionAsync();
      //console.log(coords.longitude, coords.latitude);
      //Alert.alert("Your Location", longitude.toString()+", "+latitude.toString());
      this.getWeather(longitude,latitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
      console.log(error);
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, main, description, icon } = this.state;
    //console.log("here "+ description);
    return isLoading ? <Loading /> : <Weather temp={Math.round(main.temp)} description={description} icon_num={icon}/>;
    //return isLoading ? <Loading /> : <Weather temp={Math.round(main.temp)} description={description} icon_num={icon}/>;
  }
}