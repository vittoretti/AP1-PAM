import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import DadosPessoais from './DadosPessoais';
import ExperienciaProfissional from './ExperienciaProfissional';
import ExperienciaAcademica from './ExperienciaAcademica';
import CompetenciasTecnicas from './CompetenciasTecnicas';
import TelaSucesso from './TelaSucesso';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Dados Pessoais" component={DadosPessoais} />
        <Stack.Screen name="Exp. Acadêmica" component={ExperienciaAcademica} />
        <Stack.Screen name="Exp.Profissional" component={ExperienciaProfissional} />
        <Stack.Screen name="Comp. Técnicas" component={CompetenciasTecnicas}/>
        <Stack.Screen name="Cadastro concluido" component={TelaSucesso}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
