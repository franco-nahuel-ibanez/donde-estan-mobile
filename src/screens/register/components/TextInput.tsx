import React from 'react';
import { StyleSheet, Text, View, Image, TextInput as RNTextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FormikErrors, FormikHandlers, FormikTouched, FormikValues } from 'formik';

interface Props {
  label?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  id: string,
  values: FormikValues,
  errors: FormikErrors<FormikValues>, 
  handleChange: FormikHandlers['handleChange'],
  handleBlur: FormikHandlers['handleBlur'],
  touched: FormikTouched<FormikValues>,
}

export const TextInput = ({ 
  label,
  id,
  errors,
  touched,
  icon,
  handleChange,
  handleBlur,
  values,
}: Props) => {
  
  const validationColor = '#223e4b';

  console.log('algo', touched[id])
  
  return (
      <View>
        { label && (<Text style={styles.label}>{label}</Text>) }

        <View style={{
          ...styles.container,
          borderWidth: 1,
          borderColor: touched ? (errors ? 'red' : validationColor) : 'gray',
        }}>
          {icon && (
            <View>
              <Ionicons name={icon} size={24} color="black" />
            </View>
          )}
          <RNTextInput
            id={id}
            value={values[id]}
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            onChange={handleChange}
            onBlur={handleBlur}

          />
        </View>    
          {(touched[id] && errors[id]) && (
            <Text style={{ color: 'red' }}>{JSON.stringify(errors[id])}</Text>
          )}
      </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    // fontSize: 22,
  },
})
