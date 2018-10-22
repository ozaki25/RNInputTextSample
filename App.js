import React, { Component } from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: '#bbb',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'なまえ' };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={name => this.setState({ name })}
              onBlur={() => this.setState(prevState => ({ name: prevState.name.trim() }))}
              value={this.state.name}
            />
            <TextInput style={styles.textInput} />
            <Text>{this.state.name}</Text>
            <Button title="送信" onPress={() => alert(this.state.name)} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
