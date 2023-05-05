import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useDobounce } from '../../../hooks/useDebounce';

interface Props {
  onDebounce: (text: string) => void
}

const InputSearch = ({ onDebounce }: Props) => {
  const { colors: {card, background} } = useTheme()

  const [search, setSearch] = useState('')
  const { debounce } = useDobounce(search)

  useEffect(() => {
    onDebounce(debounce)
  }, [debounce])

  return (
    <View style={{
        ...styles.container,
        backgroundColor: card,
      }}
    >
      <TextInput
        onChangeText={setSearch}
        autoComplete='off'
        autoCorrect={false}
        placeholder='Buscar'
        placeholderTextColor={background}
        cursorColor={background}
        showSoftInputOnFocus={true}
        style={{
          ...styles.input,
          backgroundColor: card,
          borderColor: background,
        }}
      />
      <Ionicons
        name="search"
        size={24}
        color={background}
        style={{marginRight: 10}}
      />
    </View>
  )
}

export default InputSearch

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '80%',
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    elevation: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderRadius: 50,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#000',
  }

})