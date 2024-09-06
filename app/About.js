import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const About = ({ route }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (route.params?.data) {
      setData(route.params.data);
    }
  }, [route.params?.data]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data ? (
        <>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.company}>{data.company.display_name}</Text>
          <Text style={styles.location}>{data.location.display_name}</Text>
          <Text style={styles.category}>Category: {data.category.label}</Text>
          <Text style={styles.contractTime}>Contract Time: {data.contract_time}</Text>
          <Text style={styles.salary}>
            {data.salary_min && data.salary_max ? `${data.salary_min} - ${data.salary_max}` : 'Salary not specified'}
          </Text>
          
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.createdDate}>Posted on: {new Date(data.created).toLocaleDateString()}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(data.redirect_url)}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.noData}>No data available</Text>
      )}
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  company: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 5,
    textAlign: 'center',
  },
  contractTime: {
    fontSize: 16,
    color: 'orange',
    marginBottom: 5,
    textAlign: 'center',
  },
  salary: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    textAlign: 'left', 
    marginHorizontal: 16, 
    lineHeight: 20,
  },
  createdDate: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  noData: {
    fontSize: 16,
    textAlign: 'center',
  },
});
