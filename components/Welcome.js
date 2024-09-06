import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>Hello,<Text style={{color:'orange'}}> Satyanarayana</Text></Text>
      
      
      <Text style={styles.head}> Find a Perfect Job</Text>
    </View>
  )
}

export default Welcome
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
 
  name:{
    marginHorizontal:10,
    marginTop:0,
    fontSize:20,
    fontWeight:'light'
  },
  head:{
    fontSize:24,
    fontWeight:'bold',
    marginLeft:5,
    textAlign:'start',
  },

})