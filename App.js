import React,{useCallback,useRef}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootoomSheet from './components/BottomSheet'
import Greeting from './components/Greeting';



export default function App() {
  const ref=useRef(null)
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
    },[])
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.container}>
      <StatusBar style="light" />
      <Button title="Поиск Горничных..." style={styles.button} onPress={onPress}/>
      <BootoomSheet ref={ref}/>
      <Greeting/>
     
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,   
  },
});
