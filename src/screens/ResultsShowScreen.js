import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const ResultsShowScreen=({navigation})=>{
    const id=navigation.getParam('id');
    console.log(id);
    return(
        <View>
            <Text>
ResultsShowScreen
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({})

export default ResultsShowScreen;