import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { IMissing } from '../../../interfaces'
import MissingCard from '../../../components/MissingCard'
import MissingModal from '../../../components/MissingModal'

interface Props {
  missings: IMissing[]
  handleLoadMore: () => void
}


const MissingInfiniteScroll = ({missings, handleLoadMore}: Props) => {
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

      <FlatList
        contentContainerStyle={{alignItems: 'center', marginTop: 30}}
        centerContent={true}
        data={missings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
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
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<Text>Cargando...</Text>}
      />
    </View>
  )
}

export default MissingInfiniteScroll

const styles = StyleSheet.create({})