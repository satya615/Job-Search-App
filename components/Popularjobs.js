import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import About from '../app/About.js';
import { textSpanEnd } from 'typescript';

const Popularjobs = ({ navigation, data, load }) => {
  const [fulldata, setFullData] = useState([]);

  useEffect(() => {
    if (data) {
      setFullData(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Popular Jobs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {load ? (
          <ActivityIndicator size="large" color="orange" style={styles.activityindicator}/>
        ) : (
          fulldata.length > 0 ? (
            fulldata.map((element) => (
              <TouchableOpacity
                key={element.id}
                style={styles.jobContainer}
                onPress={() => navigation.navigate('About', { data: element })}
              >
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{element.title}</Text>
                <Text style={styles.company}>{element.company.display_name}</Text>
                {/* <Text style={styles.location}>{element.location.display_name}</Text> */}
                <Text style={styles.salary}>
                  {element.salary_min && element.salary_max ? `${element.salary_min} ` : 'Salary not specified'}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noJobs}>No jobs found</Text>
          )
        )}
      </ScrollView>
    </View>
  );
};

export default Popularjobs;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    textAlign: 'center',
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
    
  },
  scrollContent: {
    textAlign: 'center',
  },
  activityindicator:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobContainer: {
    width: width / 2.4,
    height: height / 5,
    margin: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  company: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
    color: '#555',
  },
  location: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center',
  },
  salary: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
  },
  noJobs: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
