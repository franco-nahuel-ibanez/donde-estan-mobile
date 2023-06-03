
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Header } from '../../components/Header'
import { useFormik } from 'formik'
import { register } from './schemas/Index';
import { Ionicons } from '@expo/vector-icons';
import { TextInput as Custom } from './components/TextInput';


export default function Register() {

  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      age: '',
      dateOfDisappearance: '',
      placeOfDisappearance: '',
      description: '',
      image: '',
      phone: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log("")
    },
    validationSchema: register,
  });

  return (
    <ScrollView>
      <Header>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Reportar Desaparecido</Text>
      </Header>

      <View style={{
        paddingHorizontal: 20,
        paddingVertical: 40,
      }}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre</Text>        
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
          />
          {
            (touched.name && errors.name) && (
              <Text style={styles.error}>{errors.name}</Text>
            )
          }
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Apellido</Text>        
          <TextInput
            placeholder="Apellido"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
          />
          {
            (touched.lastName && errors.lastName) && (
              <Text style={styles.error}>{errors.name}</Text>
            )
          }
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Edad al momento de su desaparición</Text>        
          <TextInput
            keyboardType='numeric'
            placeholder="Edad"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.age}
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
          />
          {
            (touched.age && errors.age) && (
              <Text style={styles.error}>{errors.age}</Text>
            )
          }
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fecha de desaparición</Text>        
          <TextInput
            placeholder="Fecha de desaparición"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.dateOfDisappearance}
            onChangeText={handleChange('dateOfDisappearance')}
            onBlur={handleBlur('dateOfDisappearance')}
          />
          {
            (touched.dateOfDisappearance && errors.dateOfDisappearance) && (
              <Text style={styles.error}>{errors.dateOfDisappearance}</Text>
            )
          }
        </View>



        <TouchableOpacity
          onPress={() => handleSubmit()}
          activeOpacity={0.8}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>


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
  title: {
    fontSize: 24,
    textAlign: 'center',
    // textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginHorizontal: 10,
  }
})