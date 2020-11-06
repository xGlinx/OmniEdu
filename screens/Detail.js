import React from "react"
import { View, Text, TextInput, TouchableOpacity,StyleSheet, FlatList, Alert } from "react-native"
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DocumentPicker from 'react-native-document-picker'

export default () => {
    return (
        <LinearGradient
            colors= {[ '#7159c1', '#9B49c1']}
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 1}}
            style={styles.container}
        >
        <FlatList
        styles={styles.list}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle= {{paddingHorizontal: 20}}
        showsVerticalScrollIndicator= {false}

        data={[
            {
            id: 1,
            name: 'avance-1.json',
            size: 3251,
            url: 'com.android.download/avance-1.json'
            }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>(
            
            <View style={styles.list}>
            <TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text> 
            </TouchableOpacity>
            <Text 
                style={styles.size}
                numberOfLines= {2}
            >URL: {item.url}</Text>

            </View>   
            )}
            >
        
            </FlatList>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
  
    title:{
      fontSize: 32,
      color: '#fff',
      fontWeight: 'bold',
      paddingTop: 20,
    },
  
    search:{
      flexDirection: 'row',
      marginTop: 10,
      padding: 3,
      marginVertical: 20,
    },
  
    input:{
      flex: 1,
      padding: 1,
      marginLeft: 5,
      paddingLeft: 28,
      borderRadius: 30,
      fontSize: 16,
      color: '#333',
      backgroundColor: '#FFF',
    },
  
    plus:{
      backgroundColor: '#6bd4c1',
      marginLeft: 25,
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 300,
      padding: 7,
    },
  
    list:{
      marginVertical: 13,
      borderRadius: 6,
      backgroundColor: '#FFF',
      paddingLeft: 15,
      paddingTop: 10,
      paddingRight: 15,
      paddingBottom: 10,
    },
  
    name:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
  
    size:{
      color: '#666',
      marginTop: 5,
      lineHeight: 20,
    },
  
    btnlist: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
  
    check: {
      marginRight: 15,
      alignItems: 'center',
    },
  
    delete:{
      marginRight: 0,
      alignItems: 'center',
    },
  
    export: {
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#6bd4c1',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6, 
    }
  });
  
  