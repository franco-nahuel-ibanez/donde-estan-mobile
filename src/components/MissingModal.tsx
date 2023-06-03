import { Image, Modal, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Header } from './Header';
import { IMissing } from '../interfaces';
import { useTheme } from '@react-navigation/native';


interface Props {
  showModal: boolean,
  setShowModal: (value: boolean) => void,
  modalData: IMissing,
}

const MissingModal = ({ showModal, setShowModal, modalData }:Props) => {

  const { colors: {background} } = useTheme()

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={showModal}
    onRequestClose={() => {
      setShowModal(false);
    }}
  >
    <View style={styles.modalContainer}>
      <View style={{...styles.body, backgroundColor: background}}>
        <View style={{ flex: 1 }}>
          <Header height={200}>
            <>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close-circle-outline" size={50} color="black" />
              </TouchableOpacity>
              
              <View>
                <Image
                  source={{ uri: modalData?.image! }}
                  style={styles.image}
                />
              </View>
            </>
            <Text style={styles.name}>{`${modalData?.name} ${modalData?.lastName}`}</Text>
          </Header>
          <ScrollView>
            <>
              <View style={{ padding: 10 }}>
                <Text style={{...styles.infoTitle, marginTop: 0}}>Fecha de Desaparición</Text>
                <Text style={styles.infoText}>{modalData?.dateOfDisappearance}</Text>

                <Text style={styles.infoTitle}>Edad al momento de su ausencia</Text>
                <Text style={styles.infoText}>{modalData?.age}</Text>

                <Text style={styles.infoTitle}>Lugar de desaparición</Text>
                <Text style={styles.infoText}>{modalData?.placeOfDisappearance}</Text>
                
                <Text style={styles.infoTitle}>Telefono</Text>
                <Text style={styles.infoText}>{modalData?.phone}</Text>

                <Text style={styles.infoTitle}>E-mail</Text>
                <Text style={styles.infoText}>{modalData?.email}</Text>

                {
                  modalData?.description && (
                    <> 
                      <Text style={styles.infoTitle}>Información adicional</Text>
                      <Text style={{
                        fontSize: 16,
                        color: '#fff',
                        textAlign: 'center',
                        marginTop: 5,
                        lineHeight: 19  
                      }}>
                        {modalData?.description}
                      </Text>
                    </>
                  )
                }
              </View>
            </>

          </ScrollView>



          
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default MissingModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  body: {
    width: '90%',
    height: '75%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  closeButton:{
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 999
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff'
  },
  infoText: {
    fontSize: 15,
    color: '#fff'
  }
})