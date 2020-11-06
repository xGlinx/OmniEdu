import React from "react"
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from "../components/ListItem"

import dataSubjects from "../data/dataSubjects"

export default ( { navigation }) => {
    return ( 
      <View style={styles.container}>
        <FlatList style={styles.list} 
            data={dataSubjects}
            keyExtractor={x=> String(x.id)}
            renderItem= {({item})=> <ListItem onPress={() => navigation.navigate('Contenido', { subject_id: item.id, name: item.name })} title={item.name}/>}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list:{
        alignSelf: 'stretch',
    }
});