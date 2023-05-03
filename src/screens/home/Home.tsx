import { Image, StyleSheet, Text, View, ScrollView,  } from 'react-native'
import React from 'react'
import { Header } from '../../components/Header'
import MissingList from './components/MissingList'
import { useGetLastMissing } from '../../hooks/useGetLastMissing'

export default function Home() {
  
  const {lastMissing} = useGetLastMissing()

  return (
    <ScrollView>
      <Header>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </Header>

      <View style={styles.main}>
        <Text style={styles.subtitle}>Últimos Desaparecidos</Text>
        
        {
          lastMissing.length > 0 
            ? <MissingList
                lastMissing={lastMissing}
              />
            : <Text>Cargando...</Text>
        }
        
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  main: {
    marginHorizontal: 20,
  },

  subtitle: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    textTransform: 'uppercase',
  }
})