import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface Props {
  id: number,
  name: string,
  lastName: string,
  image: string | null,
}

const MissingCard = ({ name, lastName, image = '' }: Props) => {
  return (
    <View style={{width: 300, height: 350, backgroundColor: '#fff', margin: 5, borderRadius: 10, overflow: 'hidden' }}>
    <Image source={{ uri: image! }} style={{ flex: 1 }} />


    <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{`${name} ${lastName}`}</Text>
    </View>
  </View>
  )
}

export default MissingCard

const styles = StyleSheet.create({})