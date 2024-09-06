import { StyleSheet, Text, View ,Button,StatusBar} from 'react-native';
import React, { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import Searchjobs from '../components/Searchjobs';
import Filters from '../components/Filters';
import Popularjobs from '../components/Popularjobs';
import Nearbyjobs from '../components/Nearbyjobs';
import axios from 'axios';
import { Link, useRouter } from 'expo-router';
import About from './About';


const Index = ({navigation}) => {
  const router=useRouter();
  const [fulldata, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fulltime, setFulltime] = useState(false);
  const [remote, setRemote] = useState(false);
  const [permanent, setPermanent] = useState(false);
  const [searchQuery, setSearchQuery] = useState()
  const[statusbarStyle,setStatusbarStyle] =useState('light-content')
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
          what: searchQuery!=='' ? searchQuery :'React',
          sort_by: 'salary',
          salary_min: 30000,
          full_time: fulltime ? 1 : 0,
          permanent: permanent ? 1 : 0,
          'content-type': 'application/json'
        }
      };

      try {
        setIsLoading(true);
        const response = await axios.request(options);
        if (response.data) {
          setFullData(response.data.results); /*change fr axios */ 
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
  }, [searchQuery,fulltime, permanent]);

  return (
    <View style={styles.searchContainer}>
      <Welcome />
      <Searchjobs searchvalue={searchQuery} setsearchvalue={setSearchQuery}/>
      <Filters
        fulltimevalue={fulltime}
        setvaluefulltime={setFulltime}
        remotevalue={remote}
        setremotevalue={setRemote}
        permanentvalue={permanent}
        setvaluepermanent={setPermanent}
      />
      <Popularjobs navigation={navigation} data={fulldata} load={isLoading} />
      <Nearbyjobs 
       navigation={navigation}
      fulltimevalue={fulltime}
      permanentvalue={permanent}
      what={searchQuery}
      />
      
      <StatusBar  backgroundColor='gray' barStyle={statusbarStyle} />
    </View>
    
  );
};

export default Index;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    padding: 16,
  },
});
