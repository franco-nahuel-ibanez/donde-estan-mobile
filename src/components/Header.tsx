import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  children: JSX.Element | JSX.Element[]
  height?: number
}

export const Header = ({children, height = 320}: Props) => {
  const { colors: {card} } = useTheme()
  const {top} = useSafeAreaInsets()
  
  return (
    <View style={{
      backgroundColor: card,
      width: '100%',
      // height,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      alignItems: 'center',
      paddingTop: top
    }}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({})