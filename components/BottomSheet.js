import { Dimensions,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


const {height:SCREEN_HEIGHT}=Dimensions.get('window')

//делает снизу выезд
const BottomSheet = () => {
const translationY=useSharedValue(0)

const context = useSharedValue({y:0})
const gesture=Gesture.Pan()
.onStart(()=>{ //при запуске
  context.value={y:translationY.value}
})
.onUpdate((event)=>{//при обновлении
  translationY.value=event.translationY
});

const rBottomSheetStyle=useAnimatedStyle(()=>{
  return{
    transform:[{translateY:translationY.value}],
  }
})

  return(
    <GestureDetector gesture={gesture}>
<Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>{/*теперь вниз вверх делает */}
<View style={styles.line}/>
</Animated.View>
 </GestureDetector>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer:{
    height:SCREEN_HEIGHT,
    width:'100%',
    backgroundColor:'white',
    position:'absolute',
    top:SCREEN_HEIGHT /1.5,
    borderRadius:30
  },
  //линия на модалке
  line:{
    width:75,
    height:4,
    backgroundColor:'grey',
    alignSelf:'center',
    marginVertical:15,//опустила линию на модалку
  borderRadius:25,
  },
})

export default BottomSheet



//rnfse