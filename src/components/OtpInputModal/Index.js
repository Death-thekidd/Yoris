import { useRef, useState, useEffect } from "react";
import { Modal, Pressable, TextInput, View } from "react-native";
import { Constants } from "../../../constants/db.mock";
import { Button } from "../Button";
import { Section, Text } from "../Layout";
import { PressableSection } from "../Layout/styles";
import { ModalCenteredView, ModalView, Row } from "../Modal/styles";
import Input from "./Input";

export default ({
  buttonStyle = {
    borderRadius: 50,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText,
  onOtpValidate,
}) => {
  const textInputRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState(0);
  const [pinReady, setPinReady] = useState(false);
  const [inputFocused, setinputfocused] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [values, setValue] = useState(null);

  const NumPins = new Array(5).fill(0);

  useEffect(() => {
    setPinReady(code.length === 5);
    return setPinReady(false);
  }, [code]);

  const handleOnBlur = () => setinputfocused(false);
  const toCodeDigitInput = (_val, i) => {
    const emptyChar = " ";
    const digit = code[i] || emptyChar;
    const isCurrentDigit = i === code.length;
    const isLastDigit = i === code.length - 1;
    const isCodeFull = code.length === 5;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <Text
        style={{
          backgroundColor: "#4E4E4E",
          borderWidth: 1,
          borderColor:
            inputFocused && isDigitFocused
              ? Constants.theme.primary
              : Constants.theme.gray,
          width: 48,
          height: 48,
          borderRadius: 50,
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 20,
          color: Constants.theme.light,
        }}
        key={i}
      >
        {digit}
      </Text>
    );
  };
  const handleOnPress = () => {
    setinputfocused(true);
    textInputRef?.current?.focus();
  };

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
              backgroundColor: Constants.theme.dark,
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: 25,
              }}
            >
              {showOtpInput ? "Input OTP" : "Authentication"}
            </Text>
            <Text
              style={{
                fontSize: 15,
              }}
            >
              {showOtpInput
                ? "Admin will send a 5 digit code to be inputed below. "
                : "Select authentication mode"}
            </Text>

            <Section
              style={{
                width: 280,
              }}
            >
              {showOtpInput && (
                <PressableSection
                  onPress={handleOnPress}
                  style={{
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                  }}
                >
                  {NumPins.map(toCodeDigitInput)}
                </PressableSection>
              )}
              <TextInput
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
                value={code}
                onChangeText={setCode}
                maxLength={5}
                returnKeyType={"done"}
                keyboardType={"number-pad"}
                textContentType={"oneTimeCode"}
                ref={textInputRef}
                onBlur={handleOnBlur}
              />
              <Button
                onPress={
                  showOtpInput
                    ? () => {
                        setModalVisible(false);
                        onOtpValidate();
                      }
                    : null
                }
                style={{
                  marginBottom: 25,
                  borderRadius: 50,
                  paddingHorizontal: 25,
                  backgroundColor: Constants.theme.primary,
                }}
              >
                <Text style={{ color: Constants.theme.dark }}>
                  {showOtpInput ? "Submit" : "In App"}
                </Text>
              </Button>
              <Button
                onPress={() => setShowOtpInput(true)}
                style={{
                  borderRadius: 50,
                  paddingHorizontal: 25,
                }}
              >
                <Text style={{ color: Constants.theme.primary }}>
                  {showOtpInput ? "Resend OTP" : "Request OTP"}
                </Text>
              </Button>
            </Section>
          </ModalView>
        </ModalCenteredView>
      </Modal>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={[buttonStyle]}
      >
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          {buttonText}
        </Text>
      </Pressable>
    </>
  );
};
