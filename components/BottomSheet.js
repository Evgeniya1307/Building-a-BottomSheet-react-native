import { Dimensions,StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useCallback,useImperativeHandle} from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring,withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Children } from 'react/cjs/react.production.min';
import Greeting from './Greeting';




const {height:SCREEN_HEIGHT}=Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT +50;

//делает снизу выезд
const BottomSheet =React.forwardRef(({},ref) => {
const translateY=useSharedValue(0);
const active = useSharedValue(false);

const scrollTo = useCallback((destination) => {
 'worklet' //рабочий
 active.value = destination !== 0;
 translateY.value=withSpring(destination, {damping:50})
  },[]);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

const context = useSharedValue({y:0});
const gesture=Gesture.Pan()
.onStart(()=>{ //при запуске
  context.value={y:translateY.value};
})
.onUpdate((event)=>{//при обновлении
  translateY.value=event.translationY + context.value.y;
  translateY.value=Math.max(translateY.value, MAX_TRANSLATE_Y);
})
.onEnd(()=>{ //под конец
if(translateY.value > - SCREEN_HEIGHT/3){
 scrollTo(0)
} else if(translateY.value <- SCREEN_HEIGHT/1.5){
  scrollTo(MAX_TRANSLATE_Y)
}
});

useEffect(() => {
 scrollTo(-SCREEN_HEIGHT/3);
}, [])

const rBottomSheetStyle=useAnimatedStyle(()=>{
  const borderRadius=interpolate(
    translateY.value, //выровняется при полном поднятие вверх
    [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
    [25, 5],
    Extrapolate.CLAMP//когда его нет то полукруг
    );

  return{
    borderRadius,
    transform:[{translateY:translateY.value}],
  };
});

  return(
   <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>{/*теперь вниз вверх делает */}
          <View style={styles.line} />
        </Animated.View>
      </GestureDetector>

  );
});

const styles = StyleSheet.create({
  bottomSheetContainer:{
    height:SCREEN_HEIGHT,
    width:'100%',
    backgroundColor:'white',
    position:'absolute',
    top:SCREEN_HEIGHT,
    borderRadius:25,
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
});

export default BottomSheet;



//rnfse