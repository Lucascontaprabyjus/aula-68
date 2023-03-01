import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Search from "../screens/search";
import Transaction from "../screens/transaction";
const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
 render(){
  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "transação" Component = {Transaction}/>
        <Tab.Screen name = "pesquisa" Component = {Search}/>
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
 }
}
