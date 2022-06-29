import { useState } from "react";
import { Modal, Pressable, TextInput, View } from "react-native";
import { Constants } from "../../../../../constants/db.mock";
import { Button } from "../../../../components/Button";
import { Section, Text } from "../../../../components/Layout";
import {
  ModalCenteredView,
  ModalView,
} from "../../../../components/Modal/styles";

export default ({ buttonStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState();
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalCenteredView>
          <ModalView
            style={{
              backgroundColor: "#000",
            }}
          >
            <Text
              style={{
                fontSize: 25,
              }}
            >
              Please State Reason
            </Text>
            <Section
              style={{
                width: 280,
              }}
            >
              <Button
                style={{
                  marginBottom: 25,
                  borderRadius: 50,
                  paddingHorizontal: 25,
                }}
              >
                <Text style={{ color: Constants.theme.primary }}>
                  Client not Available
                </Text>
              </Button>
              <Button
                style={{
                  borderRadius: 50,
                  paddingHorizontal: 25,
                }}
              >
                <Text style={{ color: Constants.theme.primary }}>
                  Rejected Order
                </Text>
              </Button>
            </Section>
            <View
              style={{
                borderBottomColor: "#C4C4C4",
                borderWidth: 1,
              }}
            >
              <TextInput
                onChangeText={(text) => setValues(text)}
                placeholder={"Other (Specify)"}
                placeholderTextColor={"white"}
                style={{
                  borderRadius: 5,
                  marginVertical: 5,
                  color: "#fff",
                  width: 280,
                }}
              />
            </View>
            <Section
              style={{
                width: 280,
              }}
            >
              <Button
                onPress={() => setModalVisible(false)}
                style={{
                  marginBottom: 25,
                  borderRadius: 50,
                  paddingHorizontal: 25,
                  backgroundColor: Constants.theme.primary,
                }}
              >
                <Text style={{ color: "#000" }}>Submit</Text>
              </Button>
            </Section>
          </ModalView>
        </ModalCenteredView>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={[
          {
            borderRadius: 50,
            borderWidth: 1,
            borderColor: Constants.theme.primary,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            alignSelf: "center",
          },
          buttonStyle,
        ]}
      >
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          Unable to deliver
        </Text>
      </Pressable>
    </>
  );
};
