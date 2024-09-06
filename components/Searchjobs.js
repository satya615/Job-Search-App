import { StyleSheet, Text, View, TextInput, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';

const Searchjobs = ({ searchvalue, setsearchvalue }) => {
  const [temp, setTemp] = React.useState('');

  const Update = () => {
    setsearchvalue(temp);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.search}
        onChangeText={(t) => setTemp(t)}
        placeholder="Search for Jobs"
        clearButtonMode="always"
        value={temp} // Use temp value here to display the updated text input
      />
      <Pressable onPress={Update} style={styles.searchicon}>
        <EvilIcons name="search" style={styles.icon} size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Searchjobs;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',  // Align items in a row
    alignItems: 'center',  // Center vertically
    justifyContent: 'space-between',  // Space between the search bar and icon
    padding: 10,
  },
  search: {
    flex: 1,  // Allow the search bar to take the remaining space
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginRight: 10,  // Add some space between the search bar and icon
  },
  icon: {
    backgroundColor: 'white',
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:89,
    borderColor:'orange',
    borderWidth:2,
    cursor:'pointer',
    width:'auto'
  },
  searchicon:{
    borderRadius:100
  }
});
