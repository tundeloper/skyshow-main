import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
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
} from '../../styles/styles';

// ======icon==============
import { Octicons } from '@expo/vector-icons';


const cardCategoryData = [
    { id: 1, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 2, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "ITUNES CARD" },
    { id: 3, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "EBAY CARD" },
    { id: 4, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "GOOGLE PLAY CARD" },
    { id: 5, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "SPOTIFY CARD" },
    { id: 6, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 7, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 8, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 9, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 10, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
];

const CardCategory = ({ isModalVisible, toggleModal, handleCategorySelection }) => {
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
                    <ShortModalTitle>Select a Category</ShortModalTitle>
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
                                    <ShortModalItemName>{item.name}</ShortModalItemName>
                                </ShortModalItemContainer>
                            </TouchableOpacity>
                        )}
                    />
                </ShortModal>
            </ShortModalContainer>
        </Modal>
    );
}

export default CardCategory;
