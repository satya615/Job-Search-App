import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Profile = () => {
  const img = require('../../assets/images/aa.png')
  return (
    <View style={styles.imgcontainer}>
      <Image style={styles.profImage} source={img} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  
  profImage:{
    
    resizeMode:'center',
    width: 50,
        height: 50,
        margin:6,
        backgroundColor:'rgba(0,0,0,0.8)',
       borderRadius:50,
        borderWidth: 1,
        borderColor: 'black',
   
       
        
  }
})