import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Constants } from '../../../../constants/db.mock';


export default function MenuScreen() {
      return (
       <View 
        style={{
          flex: 1,
          backgroundColor: "#000",
       }}
       >
        <SafeAreaView
           style={{ 
             flex: 1, 
           }}
          >
        <TouchableOpacity 
              style={{
                alignItems: "flex-end",
                margin: 16,
             }}
             > 
               <FontAwesome5 
                 style={{
                   top: 10,
                   left: 20,
                 }}
                 color={Constants.theme.primary}
                 name={"bars"}
                 size={25}
               />
            </TouchableOpacity>
            <View
              style={{
                flex: 1, 
                alignItems: "center",
                justifyContent: "center"
              }}
             >
              <Text 
                style={{ 
                  color: "#000", 
                  fontSize: 20, 
                 }}>
              </Text>
            </View>
        </SafeAreaView>
       </View>
      );
}

