import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
} from 'react-native';

import { Card, Title, Paragraph, Button} from 'react-native-paper';

import React, { useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';


export default function TelaSucesso() {
  const navigation = useNavigation();
  //criação das variáveis para a "captura do texto"
   const [comptec, SetCompTec] = useState ('');
  //área dos inputs de texto e do card
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#4169E1" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}> Sucesso! </Text>
            <Card style={styles.card}>
             <Text style={styles.label}>Seu Cadastramento foi concluído.
             Seu currículo agora está disponível na plataforma.</Text>
            </Card>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#4169E1',
    padding: 24,
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
  },
   label: {
    fontSize:18, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:25
  },
  title: {
    marginTop:60,
    marginBottom:60,
    fontSize:33,
    fontWeight:'bold',
    textAlign: 'center'
  },
});