import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal} from 'react-native'
import React, {useState} from 'react'
import MissingCard from '../../../components/MissingCard';
import MissingModal from '../../../components/MissingModal';
import { IMissing } from '../../../interfaces';

interface Props {
  lastMissing: IMissing[]
}


const MissingList = ({ lastMissing }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IMissing>();

  const openModal = (item: IMissing) => {
    setModalData(item);
    setShowModal(true);
  }

  return (
    <View>

      <MissingModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData!}
      />


      <View>
        <FlatList
          data={lastMissing}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => openModal(item)}
            >
              <MissingCard
                id={item.id}
                name={item.name}
                lastName={item.lastName}
                image={item.image}
              />

            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />             
      </View>
    </View>
  )
}

export default MissingList

const styles = StyleSheet.create({})