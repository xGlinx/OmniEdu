import React from "react"
import { View, StyleSheet,  Image, Dimensions, Button, Text, TextInput } from "react-native"
//import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient'

import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get('screen');

export default class LoginScreen extends React.Component{
    render(){   

        const { navigation } = this.props
        
        return(
            <View style={[styles.container]}>
                <LinearGradient
                    style={[styles.centerAlign,{ height: "100%" }]}
                    colors={["#7159c1","#9B49c1"]}
                >
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                    />
                </LinearGradient>

                <View style={[
                    styles.centerAlign, 
                    { 
                        marginTop: 2, 
                        backgroundColor: "#bbb", 
                        height: height,
                    }
                ]}>
                    <View style={styles.inputContainer}>
                        <Text
                            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 5}}
                        >
                            INICIAR SESIÓN
                        </Text>

                        <View style={{ marginTop: 30, marginBottom: 10}}>
                        <Text style={{ marginLeft: 10}}> Usuario </Text>
                            <TextInput style={{  margin: 15,
                                height: 40,
                                borderColor: '#7a42f4',
                                borderWidth: 1,
                                width: 280,
                                borderRadius: 6,
                            }} 
                                autoCapitalize='none' 
                                placeholder="User" 
                                placeholderTextColor="#aaa"/>
                        </View>
                        <Text style={{ marginTop: 10, marginBottom: 20}}> O </Text>
                        <Image
                         source={require("../assets/images/huella.png")}
                         style={styles.huella}
                        />
                        <View>
                            <Button
                                title="ingresar"
                                color="#7a42f4"
                                onPress={() => navigation.navigate('Cursos')} 
                            > 
                            </Button>
                        </View>
                    </View>           
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 2.7,
    }, 
    centerAlign:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        backgroundColor: "rgba(255,255,255,1)",
        padding: 20,
        marginTop: -height/ 1.6,
        borderRadius: 20,
        width: width /1.1,
        height: height / 2,
        paddingBottom: 80,
        alignItems: 'center',
    },
    input:{
        fontSize: 18,
        borderWidth: 1.5,
        borderColor: "#aaa",
        borderRadius: 30,
        width: width / 1.2,
        padding: 10,
        marginVertical: 15,
    },
    logo: {
        width: width / 0.8,
        height: height / 6,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#aaa',
        margin:10,
    },

    huella: {
        width: 80,
        height: 90,
        marginBottom: 20
    }
})

