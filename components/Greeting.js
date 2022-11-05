import React from 'react';
import {StyleSheet, Pressable, Button,Text, View } from 'react-native';

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

// const styles = StyleSheet.create({
// button:{
//   backgroundColor: 'rgba(78, 116, 289, 1)',
// }

// })