import React from 'react';
import { StyleSheet,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  InitScreen from './src/screens/InitScreen'
import  StartScreen from './src/screens/StartScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MobxProvider} from "./src/components/provider"
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App()  {
  return (
    <MobxProvider>
    <PaperProvider theme={theme}>
       <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
               name="Home" 
              component={InitScreen}
              options={{
                headerTitle: "Ваши характиристики",
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Далее"
                    color="red"
                  />
                ),
              }}
          />
    <Stack.Screen
               name="StartPage" 
              component={StartScreen}
          />
       </Stack.Navigator>
     </NavigationContainer>
              </PaperProvider>
              </MobxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    paddingBottom: 100
  }
});
