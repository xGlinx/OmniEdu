import * as React from 'react';
import { Button, Text } from "react-native";
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import OnBoarding from "./screens/OnBoarding"
import LoginScreen from "./screens/Login"
import SubjectScreen from "./screens/Subject"
import ContentScreen from "./screens/Content"
import HomeworkScreen from "./screens/Homework"
import DetailsScreen from "./screens/Detail"

const OnBoardingNavigator= createStackNavigator({
  OnBoard: OnBoarding,
  Login: LoginScreen,
}, {
  initialRouteName: 'OnBoard',
  headerMode: 'none'
})

ContentScreen.navigationOptions = ({ navigation }) => {
  const _id = navigation.getParam('subject_id')
  return{
    headerTitle: 'Contenido',
    headerRight: ()=>{
      return(
        <Button
        title= 'Ir a tareas'
        onPress={() => navigation.navigate('Tareas', { _id: _id })}
        />
      )
    },
  }
}
    

const AppNavigator = createStackNavigator({
  Cursos: SubjectScreen,
  Contenido: ContentScreen,
  Tareas: HomeworkScreen,
  Avances: DetailsScreen,
}, {
  initialRouteName: 'Cursos',
  defaultNavigationOptions : {
    headerStyle: {
      backgroundColor: '#7159c1'
    }
  }
})


const BaseStack = createSwitchNavigator({
  OnBoarding2: OnBoardingNavigator,
  App: AppNavigator,
}, {
  initialRouteName: 'OnBoarding2'
})

export default createAppContainer(BaseStack)

