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


export default function ExperienciaProfissional() {
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
          <Text style={styles.title}> Tela de Cadastro </Text>
           <Text style={styles.label}> Explique quais são suas competências técnicas.</Text>
            <Card style={styles.card}>
              <Text>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Exemplo: Sou muito apto a..."
                multiline={true}          
                numberOfLines={10}         
                textAlignVertical="top"
                onChangeText={(Text) => {
                  SetCompTec(Text);
                  //recurso de teste para verificar se o valor está sendo atribuido a variável
                  console.log('Texto atual:', Text);
                }}
                value={comptec}
              />
            </Card>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Button
      mode={'contained'}
      onPress={() => navigation.navigate('Cadastro concluido')} 
      icon='arrow-right'
      style={styles.button}
      >
      Cadastrar-se
      </Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#4169E1',
    padding: 24,
  },
  input: {
    height: 300,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
    margin: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
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
  button:{
    backgroundColor:'green',
    margin:8,
    borderRadius:10,
  }
});