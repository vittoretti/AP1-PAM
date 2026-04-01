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

import { Card, Title, Paragraph, Button } from 'react-native-paper';

import React, { useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

export default function DadosPessoais() {
  const navigation = useNavigation();
  //criação das variáveis para a "captura do texto"
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, settel] = useState('');
  const [lkdn, setlkdn] = useState('');

  //área dos inputs de texto e do card
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4169E1" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={styles.scrgitholl}>
            <Text style={styles.title}> Tela de Cadastro </Text>
            <Text style={styles.label}>Insira seus dados pessoais. </Text>
            <Card style={styles.card}>
              <Text>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                onChangeText={(Text) => {
                  setNome(Text);
                  //recurso de teste para verificar se o valor está sendo atribuido a variável
                  console.log('Nome atual:', Text);
                }}
                value={nome}
              />
              <Text>E-Mail:</Text>
              <TextInput
                style={styles.input}
                placeholder="username@gmail.com"
                keyboardType="email-address"
                onChangeText={(Text) => {
                  setEmail(Text);
                  console.log('E-Mail atual:', Text);
                }}
                value={email}
              />
              <Text>Telefone:</Text>
              <TextInput
                style={styles.input}
                placeholder="(00) 00000-0000"
                keyboardType="phone-pad"
                maxLength={15}
                onChangeText={(Text) => {
                  settel(Text);
                  console.log('Telefone atual:', Text);
                }}
                value={tel}
              />
              <Text>Perfil do Linkedin:</Text>
              <TextInput
                style={styles.input}
                placeholder="linkedin.com/in/exemplo"
                onChangeText={(Text) => {
                  setlkdn(Text);
                  console.log('Linkedin atual:', Text);
                }}
                value={lkdn}
              />
                 <Button
        mode={'contained'}
        onPress={() => navigation.navigate('Exp. Acadêmica')}
        icon="arrow-right"
        style={styles.button}>
        Próxima Tela
      </Button>
            </Card>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    padding: 24,
  },
  input: {
    height: 60,
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  title: {
    marginTop: 60,
    marginBottom: 60,
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    margin: 8,
    borderRadius: 10,
  },
});
