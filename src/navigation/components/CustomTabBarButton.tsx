import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import React from 'react';

interface Props extends BottomTabBarButtonProps {}

export const CustomTabBarButton = ({children, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.touchable}
      >
        {children}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    overflow: 'visible',
    backgroundColor: 'white',
    borderRadius: 50,
    top: -30,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  touchable: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})