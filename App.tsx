import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [admin, setAdmin] = useState(false);

  const registrarCredencial = () => {
    if (nome.trim() === '') {
      Alert.alert(
        'Atenção',
        'Digite seu nome antes de registrar a credencial.'
      );
      return;
    }

    Alert.alert(
      'Credencial Registrada',
      `Bem-vindo, ${nome}!`
    );
  };

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      <Text
        style={styles.headerTitle}
        selectable
      >
        DevBadge Profile
      </Text>

      <View style={styles.textComposition}>
        <Text style={styles.baseText}>
          Status do Sistema:{' '}
          <Text style={styles.highlightText}>
            Online
          </Text>
        </Text>
      </View>

      <Text
        style={styles.tipText}
        onPress={() => console.log('Pressionamento rápido')}
        onLongPress={() =>
          Alert.alert(
            'Dica',
            'Preencha seus dados abaixo.'
          )
        }
      >
        (Pressione e segure para dicas)
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de desenvolvedor..."
        placeholderTextColor="#666"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="REGISTRAR CREDENCIAL"
          onPress={registrarCredencial}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>
          Ativar Modo Admin?
        </Text>

        <Switch
          value={admin}
          onValueChange={setAdmin}
        />
      </View>

      <View
        style={[
          styles.accessBox,
          admin
            ? styles.accessAdmin
            : styles.accessBasic,
        ]}
      >
        <Text
          style={[
            styles.accessText,
            admin
              ? styles.accessAdminText
              : styles.accessBasicText,
          ]}
        >
          {admin
            ? 'Acesso Total (Admin)'
            : 'Acesso Básico'}
        </Text>
      </View>

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <View
          key={item}
          style={styles.card}
        >
          <Text style={styles.cardText}>
            Elemento {item}
          </Text>
        </View>
      ))}

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#00191D',
  },

  container: {
    alignItems: 'center',
    paddingVertical: 60,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#58A6FF',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#3FB950',
    marginBottom: 10,
  },

  textComposition: {
    marginBottom: 20,
  },

  baseText: {
    color: '#fff',
    fontSize: 16,
  },

  highlightText: {
    color: '#3FB950',
    fontWeight: 'bold',
  },

  tipText: {
    color: '#999',
    marginBottom: 25,
  },

  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#58A6FF',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#fff',
    backgroundColor: '#111827',
    marginBottom: 15,
  },

  buttonContainer: {
    width: '90%',
    marginBottom: 30,
  },

  switchContainer: {
    width: '90%',
    backgroundColor: '#111827',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  switchText: {
    color: '#fff',
    fontSize: 18,
  },

  accessBox: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },

  accessBasic: {
    borderWidth: 1,
    borderColor: '#666',
  },

  accessAdmin: {
    borderWidth: 1,
    borderColor: '#00CC44',
  },

  accessText: {
    fontWeight: 'bold',
  },

  accessBasicText: {
    color: '#ccc',
  },

  accessAdminText: {
    color: '#00CC44',
  },

  card: {
    width: 140,
    height: 100,
    borderWidth: 1,
    borderColor: '#58A6FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111827',
    marginBottom: 15,
  },

  cardText: {
    color: '#58A6FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});