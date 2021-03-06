import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity,StyleSheet, FlatList, Alert } from "react-native"
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DocumentPicker from 'react-native-document-picker'
import getRealm from "../services/realm"

import Realm from "realm"
import WorkSchema from "../schemas/WorkSchema"

export default ({ navigation }) => {
  
  const [input, setInput] = useState ('')
  /*
  const [works, setWorks] = useState([])

  const id = 199
  const subject_id = navigation.getParam('_id')

  console.log(subject_id)

  //Crea el el documento de tema
  useEffect (() => {
    async function loadWork(){

        const realm = await getRealm(); 

        const data = realm.objects('Work')

        setWorks(data);
    }
    loadWork();
  }, [])

  async function saveWork(Docuri, Docname, Docsize, DocType){
    const data = {
      id: id,
      subject_id: subject_id,
      URI: Docuri,
      name: Docname,
      size: Docsize,
      type: DocType,

    }
    const realm = await getRealm();

    realm.write(() =>{
      realm.create('Work', data)
    })
  }
  */
  //Abrir los files de tu carpeta
  const openDocumentFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

        const Docuri = res.uri
        const DocType = res.type
        const Docname = res.name
        const Docsize = res.size

      //saveWork(Docuri, Docname, Docsize, DocType)

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert(
          'Disculpe',
          'Usted no selecciono ningun archivo'
        )// User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  
  return (
  <LinearGradient
    colors= {[ '#7159c1', '#9B49c1']}
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 1}}
    style={styles.container}
  > 

    <View style={styles.search}>

      <TextInput
        value={input}
        onChangeText={ text => setInput(text)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={ false }
        placeholder = "Buscar"
    />

      <TouchableOpacity
        style={styles.plus}
        onPress={openDocumentFile}
      >
        <Icon 
          name="add" 
          size={30} 
          color="#FFF" />
      </TouchableOpacity>    
    </View>
    
    <FlatList
      styles={styles.list}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle= {{paddingHorizontal: 20}}
      showsVerticalScrollIndicator= {false}

      data={[
        {
          id: 1,
          name: 'tareaComunicacion.jpg',
          size: 3251
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
          >Tamaño: {item.size} kB</Text>

          <View style={styles.btnlist}>
            <TouchableOpacity
              style={styles.check}
              onPress={() => {}}
            >
            <Icon 
              name="visibility" 
              size={30} 
              color="#666" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.delete}
              onPress={() => {}}
            >
             <Icon 
              name="delete" 
              size={30} 
              color="#666" />
            </TouchableOpacity>
          </View>   
        </View>   
      )}
    >
      
    </FlatList>
      <TouchableOpacity
        style={styles.export}
        onPress={() => navigation.navigate('Avances')} 
      >
        <Text style={{ color: '#fff', fontWeight: 'bold'}}> Exportar Avances </Text>
      </TouchableOpacity>
  </LinearGradient>
    
  );
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

