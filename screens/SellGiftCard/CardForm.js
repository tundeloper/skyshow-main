import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
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
    CardFormOptions,
    CardFormOptionsContainer,
    CardOptionTitle,
    CardOptionSmallText,
    AllCarddFormTitle,
} from '../../styles/styles';

// ======icon==============
import { Octicons } from '@expo/vector-icons';


const cardCategoryData = [
    { id: 1,  name: "Physical card", description: "The giftcard is bought from a physical store and you have the card image" },
    { id: 2,  name: "Ecode", description: "The giftcard is bought online and you have the code or the code is on a paper, or it's scanned" },
    { id: 3,  name: "All forms", description: "Select this option if you want to see all gif crad forms, both physical and ecode" },
];

const CardForm = ({ isModalVisible, toggleModal, handleCategorySelection }) => {
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
                    <ShortModalTitle>Gift card form</ShortModalTitle>
                    <CloseButton onPress={toggleModal}>
                        <Octicons name="x" size={24} color="white" />
                    </CloseButton>
                    </ShortModalHeading>
                    <AllCarddFormTitle>Kindly select gift card form below. if you don't know which one to choose, select ALL FORMS</AllCarddFormTitle>
                    <FlatList
                        data={cardCategoryData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCategorySelection(item.name)}>
                                <CardFormOptionsContainer>
                                   <CardFormOptions>
                                        <CardOptionTitle>{item.name}</CardOptionTitle>
                                        <CardOptionSmallText>{item.description}</CardOptionSmallText>
                                   </CardFormOptions>
                                </CardFormOptionsContainer>
                                
                                                                    
                            </TouchableOpacity>
                        )}
                    />
                </ShortModal>
            </ShortModalContainer>
        </Modal>
    );
}

export default CardForm;
