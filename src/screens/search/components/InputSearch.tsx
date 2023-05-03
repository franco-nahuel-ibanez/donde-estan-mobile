import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputSearch = () => {
  return (
    <View>
      <TextInput
        placeholder='Buscar'
        style={{
          backgroundColor: '#fff',
          borderRadius: 50,
          height: 40,
          paddingHorizontal: 20,
          fontSize: 16,
          color: '#000',
          marginBottom: 10
        }}
      />
    </View>
  )
}

export default InputSearch

const styles = StyleSheet.create({})