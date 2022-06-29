import { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Constants } from "../../../constants/db.mock";
import { Button } from "../Button";
import { Text } from "../Layout/";
import { ModalView, ModalCenteredView, Row } from "./styles";

export default ({
  BottomRow,
  ModalTitle,
  modalVisible,
  setModalVisible,
  modalButtonCallBack: cb,
  buttonText = "Continue",
  buttonTextStyle,
  buttonStyle,
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ModalCenteredView>
          <ModalView style={styles.modalView}>
            {ModalTitle && <ModalTitle />}

            {BottomRow && (
              <Row>
                <BottomRow />
              </Row>
            )}
          </ModalView>
        </ModalCenteredView>
      </Modal>

      <Button
        style={[{ backgroundColor: Constants.theme.primary }, buttonStyle]}
        onPress={() => {
          setModalVisible(true);
          cb && cb();
        }}
      >
        <Text style={[{ fontSize: 24 }, buttonTextStyle]}>{buttonText}</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    borderRadius: 5,
    shadowColor: Constants.theme.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
