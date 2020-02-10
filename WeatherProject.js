
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Forecast from './components/Forecast'


class WeatherProject extends Component{
  
  constructor (props){
    super(props);
    this.state = {
      zip : '',
      forecast : null
    }
  }
  _handleTextChange = e => {
    console.warn(e.nativeEvent.text)
    this.setState({zip : e.nativeEvent.text})
  }
  render() {
    let content = null;
    if(this.state.forecast !== null){
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }
    return (
      <View style={style.containder}>
        <Text style={style.welcome}>
          You input {this.state.zip}
          ????
        </Text>
        {content}
        <TextInput 
          style={style.input}
          onSubmitEditing={this._handleTextChange}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  containder : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#f5fcff',
  },
  welcome : {
    fontSize : 20,
    textAlign : 'center',
    margin:10
  },
  input : {
    borderWidth : 2,
    padding : 2,
    height : 40,
    width : 100,
    textAlign : 'center'
  }
})

export default WeatherProject;