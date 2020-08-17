import React, { useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../Hooks/useResults';
import ResulList from '../components/ResultList';


const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi,results,errorMessage]=useResults();

  const filterResultsByPrice=(price)=>{
    //price==='$' ||'$$'||'$$$'
    return results.filter(result=>{
      return result.price===price;
    });
  };
  return (
   <>
      <SearchBar 
      term={term} 
      onTermChange={setTerm} 
      onTermSubmit={()=>searchApi(term)}
      />

      { errorMessage ? <Text>{errorMessage}</Text> : null }

    <ScrollView>
    <ResulList results={filterResultsByPrice('$')}title='Cost Effective' />
    <ResulList results={filterResultsByPrice('$$')}title='Bit Pricier'  />
    <ResulList results={filterResultsByPrice('$$$')}title='Big Spender' />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
