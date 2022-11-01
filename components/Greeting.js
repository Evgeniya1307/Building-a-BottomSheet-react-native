import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
    
        <Text>Наши услуги : {props.name}</Text>
        </View>
    );
}
export default LotsOfGreetings = () => {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Мойка окон' />  
      </View>
    );
}