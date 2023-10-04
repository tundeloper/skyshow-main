import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

//////components--------
import {
    ButtonText,
    Colors,
    CardRateInner,
    BottomTextContent,
    ShortModalContainer,
    ShortModal,
    ShortModalHeading,
    ShortModalTitle,
    CloseButton,
    ShortModalItemContainer,
    ShortModalItemName,
    ShortModalItemList,
} from '../../styles/styles';

// ======icon==============
import { Octicons } from '@expo/vector-icons';


const cardCategoryData = [
    { id: 1, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "USA", currency: "($)" },
    { id: 2, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "United Kingdom", currency:  "(£)" },
    { id: 3, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "EURO", currency:  "(€)" },
    { id: 4, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "Canada", currency: "(CAD)"},
    { id: 5, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "Other Countries" },
    { id: 6, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "All Countries" },
];

const CardCountry = ({ isModalVisible, toggleModal, handleCategorySelection }) => {
    return (
        <Modal
            isVisible={isModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <ShortModalContainer>
                <ShortModal>
                        <ShortModalHeading>
                    <ShortModalTitle>Select a country</ShortModalTitle>
                    <CloseButton onPress={toggleModal}>
                        <Octicons name="x" size={24} color="white" />
                    </CloseButton>
                    </ShortModalHeading>
                    <FlatList
                        data={cardCategoryData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCategorySelection(item.name)}>
                                <ShortModalItemContainer>
                                    {item.image && (
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{ width: 20, height: 20, marginRight: 10, borderRadius: 50 }}
                                        />
                                    )}
                                    <ShortModalItemList>
                                      <View>
                                        <ShortModalItemName>{item.name}</ShortModalItemName>
                                      </View>
                                       <View>
                                            <ShortModalItemName>{item.currency}</ShortModalItemName>
                                       </View>
                                    </ShortModalItemList>
                                 
                                </ShortModalItemContainer>
                            </TouchableOpacity>
                        )}
                    />
                </ShortModal>
            </ShortModalContainer>
        </Modal>
    );
}

export default CardCountry;
