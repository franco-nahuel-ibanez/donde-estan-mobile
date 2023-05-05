import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React, {useEffect, useState, useRef} from 'react'
import InputSearch from './components/InputSearch'
import { Header } from '../../components/Header';
import { IMissing } from '../../interfaces';
import { useMissingPaginated } from '../../hooks/useMissingPaginated';
import MissingInfiniteScroll from './components/MissingInfiniteScroll';

export default function Search() {
  const [search, setSearch] = useState<string>('')
  const [missing, setMissing] = useState<IMissing[]>([])
  const page = useRef<number>(1)
  const {loading, getMissing} = useMissingPaginated()


  useEffect(() => {
    page.current = 1
    const getData = async () => {
      const data = await getMissing({ search, page: page.current})
      setMissing(data!)
    }
    getData()
  }, [search])

  const handleLoadMore = async () => {
    page.current += 1
    const data = await getMissing({search, page: page.current})
    setMissing([...missing, ...data!])
  }

  return (
    <View style={{flex:1}}>            
      <Header>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <InputSearch
          onDebounce={setSearch}
          />
      </Header>
      {
        loading && <Text>Cargando...</Text>
      }        
      {
        missing.length > 0 && (
          <MissingInfiniteScroll
            missings={missing}
            handleLoadMore={handleLoadMore}
          />
        ) 
      } 
    </View>
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

