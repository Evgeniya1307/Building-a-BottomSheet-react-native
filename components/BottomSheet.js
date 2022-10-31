import { Dimensions,StyleSheet, Text, View } from 'react-native'
import React from 'react'


const {height:SCREEN_HEIGHT}=Dimensions.get('window')

const BottomSheet = () => {
  return <View style={styles.bottomSheetContainer}>
<View style={styles.line}/>
  </View>
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
  },
})

export default BottomSheet



//rnfse