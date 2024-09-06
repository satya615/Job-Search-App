import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator,TouchableOpacity } from 'react-native';
import axios from 'axios';

const Nearbyjobs = ({ fulltimevalue, permanentvalue,what,navigation }) => {
  const [fulldata, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.adzuna.com/v1/api/jobs/in/search/1',
        params: {
          app_id: '385ea530',
          app_key: '1e09118fced10881973efd1f325ef036',
          results_per_page: 20,
          where:'Hyderabad',
          what: what!=='' ? what :'React',
          sort_by: 'relevance',
          salary_min: 30000,
          full_time: fulltimevalue ? 1 : 0,
          permanent: permanentvalue ? 1 : 0,
          'content-type': 'application/json'
        }
      };

      try {
        setIsLoading(true);
        const response = await axios.request(options);
        if (response.data) {
          setFullData(response.data.results); /*change for api aios*/
        } else {
          console.error('Unexpected response data:', response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [fulltimevalue, permanentvalue,what]);

  return (
    <View style={styles.jobcontainer}>
      <Text style={styles.sectionheader}>Nearby Jobs</Text>
      <ScrollView showsVerticalScrollIndicator>
        {isLoading ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
          fulldata.length > 0 ? (
            fulldata.map((element) => (
              <TouchableOpacity key={element.id} style={styles.job}
              onPress={() => navigation.navigate('About', { data: element })}
              >
                <Text style={styles.title}>{element.title}</Text>
                <Text style={styles.location}>{element.location.display_name}</Text>
                <Text style={styles.salary}>
                  {element.salary_min && element.salary_max ? `${element.salary_min} - ${element.salary_max}` : 'Salary not specified'}
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
}

export default Nearbyjobs;

const styles = StyleSheet.create({
  sectionheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    marginTop:0,
  },
  jobcontainer: {
    flex: 1,
    padding: 20,
    
  },
  job: {
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    backgroundColor:'rgba(255,255,255,0.5)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: 'gray',
  },
  salary: {
    fontSize: 16,
    color: 'green',
  },
  noJobs: {
    fontSize: 16,
    color: 'red',
  },
});
