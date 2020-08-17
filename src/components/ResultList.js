import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
  if(!results.length){
      return null;
  }
  
    return (
        <View style={styles.title}>
            <Text style={styles.title}>{title} </Text>
            <FlatList

                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,

    }
});

export default withNavigation(ResultList);