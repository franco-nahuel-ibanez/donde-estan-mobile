import { View, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react'
import InputSearch from './components/InputSearch'
import { Header } from '../../components/Header';


export default function Search() {

  // const { height } = Dimensions.get('window')
  const windowHeight = Dimensions.get('window').height;
  
  return (
    <KeyboardAvoidingView
      style={{marginTop: 100, minHeight: windowHeight, backgroundColor: '#fff' }}
      behavior={'padding'}
      contentContainerStyle={{ position: 'relative', minHeight: windowHeight, backgroundColor: 'red' }}
      keyboardVerticalOffset={-500}
    >
      <Header>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <InputSearch />
      </Header>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },

})

