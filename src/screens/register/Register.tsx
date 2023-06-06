import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Header } from '../../components/Header'
import { useFormik } from 'formik'
import { register } from './schemas/Index';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



export default function Register() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      age: '',
      dateOfDisappearance: date,
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

  const handleDateChange = (event: any, selectedDate: any) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setFieldValue('dateOfDisappearance', currentDate);
  };

  return (
    <ScrollView>
      {
        showDatePicker && (
          <RNDateTimePicker
            mode='date'
            onTouchCancel={() => setShowDatePicker(false)}
            value={date}
            onChange={handleDateChange}
          />
        )
      }
      
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
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            activeOpacity={0.8}
          >
            <TextInput
              placeholder="Fecha de desaparición"
              style={styles.input}
              autoComplete='off'
              autoCorrect={false}
              value={values.dateOfDisappearance.getDate() + '/' + (values.dateOfDisappearance.getMonth() + 1) + '/' + values.dateOfDisappearance.getFullYear()}
              onChangeText={handleChange('dateOfDisappearance')}
              onBlur={handleBlur('dateOfDisappearance')}
              editable={false}
            /> 
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Lugar de desaparición</Text>        
          <TextInput
            placeholder="Lugar de desaparición"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.placeOfDisappearance}
            onChangeText={handleChange('placeOfDisappearance')}
            onBlur={handleBlur('placeOfDisappearance')}
          />
          {
            (touched.placeOfDisappearance && errors.placeOfDisappearance) && (
              <Text style={styles.error}>{errors.placeOfDisappearance}</Text>
            )
          }
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Teléfono</Text>        
          <TextInput
            keyboardType='numeric'
            placeholder="Numero de Teléfono"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.phone}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
          />
          {
            (touched.phone && errors.phone) && (
              <Text style={styles.error}>{errors.phone}</Text>
            )
          }
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo</Text>        
          <TextInput
            keyboardType='email-address'
            placeholder="Email (opcional)"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          {
            (touched.email && errors.email) && (
              <Text style={styles.error}>{errors.email}</Text>
            )
          }
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Imagen</Text>        
          <TextInput
            placeholder="Imagen"
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={values.image}
            onChangeText={handleChange('image')}
            onBlur={handleBlur('image')}
          />
          {
            (touched.image && errors.image) && (
              <Text style={styles.error}>{errors.image}</Text>
            )
          }
        </View>



        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descripción</Text>        
          <TextInput
            multiline={true}
            numberOfLines={4}
            maxLength={500}
            placeholder="Agregar Descripción (opcional)"
            style={styles.textArea}
            autoComplete='off'
            autoCorrect={false}
            value={values.description}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
          />
          {
            (touched.description && errors.description) && (
              <Text style={styles.error}>{errors.description}</Text>
            )
          }
        </View>



        <TouchableOpacity
          onPress={() => handleSubmit()}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar</Text>
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
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#f29d64',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    height: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },

})