import React from "react"
import { View, ImageBackground, Text, StyleSheet, StatusBar, Dimensions, Button, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const { height, width } = Dimensions.get('screen');

import Images from '../constants/Images'

export default class OnBoardingScreen extends React.Component {
    render() {
        const { navigation } = this.props;
    return(

        <View style={styles.container}>
            <LinearGradient
                colors= {[ '#9B49c1', '#7159c1']}
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}}
                style={styles.container}
            > 

            <Image
                style={styles.board}
                source={require('../assets/images/board.png')}
            />

            <View style={styles.padded}>
                <View style={{ zIndex: 2 }}>
                    <View>
                        <View>
                            <Text style={styles.text}>
                                OmniEdu
                            </Text>
                        </View>
                        <Text style={styles.text2}>
                            Una educación para todos y sin fronteras
                        </Text>
                    </View>
                    <View style={styles.viewbutton}>
                        <Button
                            title="Comienza ahora"
                            style={styles.button}
                            color="#8C20BA"
                            onPress={() => navigation.navigate('Login')}
                        > 
                        </Button>
                    </View>
                </View>
            </View>
        </LinearGradient>
        </View>
        
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff8000"
    },
    text :{
        fontWeight:'bold',
        color: 'white',
        fontSize: 60,
    },

    text2:{
        paddingTop: 10,
        fontSize: 16, 
        color:'rgba(255,255,255,0.8)'
    },

    padded: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        bottom: -100,
        //paddingHorizontal: theme.SIZES.BASE * 2,
        position: 'relative',
        //bottom: theme.SIZES.BASE,
    },
    button: {
        marginTop: 5,
        //width: width - theme.SIZES.BASE * 4,
        //height: theme.SIZES.BASE * 3,
        borderRadius: 100,
        shadowRadius: 0,
        shadowOpacity: 0,
    },

    viewbutton:{
        marginTop: 70,
    },

    board:{
        marginTop: 70,
        marginHorizontal: 10,
        //justifyContent: 'center',
        //alignItems: 'center',
        width: width - 20,
        //height: height/2
    }
})