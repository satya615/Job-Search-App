import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Filters = ({ fulltimevalue, setvaluefulltime, remotevalue, setremotevalue, permanentvalue, setvaluepermanent }) => {
  return (
    <View style={styles.filterContainer}>
      <Text 
        style={fulltimevalue ? styles.filterClicked : styles.filter} 
        onPress={() => setvaluefulltime(!fulltimevalue)}
      >
        Full-time
      </Text>
      {/* <Text 
        style={remotevalue ? styles.filterClicked : styles.filter} 
        onPress={() => setremotevalue(!remotevalue)}
      >
        Remote
      </Text> */}
      <Text 
        style={permanentvalue ? styles.filterClicked : styles.filter} 
        onPress={() => setvaluepermanent(!permanentvalue)}
      >
        Permanent
      </Text>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom:10,
    textAlign: 'center',
  },
  filter: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  filterClicked: {
    color: 'white',
    marginHorizontal: 10,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 13,
    fontWeight: 'bold',
    backgroundColor: 'orange',
  },
});
