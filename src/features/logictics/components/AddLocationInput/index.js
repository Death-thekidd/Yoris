import { useRoute } from "@react-navigation/native";
import { FlatList, TextInput, View } from "react-native";
import { Section, Text } from "../../../../components/Layout";
import AddressBox from "../AddressBox/AddressBox";
import { ErrorText } from "./styles";

export default ({
  error,
  setError,
  setValues,
  label,
  isMultiple,
  dropOffs = [],
  pickUps = [],
  notShowSaved,
  isEdit,
  defaultDropVal,
  defaultPickupVal,
  isDropScreen,
}) => {
  const { params } = useRoute();
  return (
    <>
      <Section
        style={{
          marginBottom: 0,
        }}
      >
        {!isDropScreen && (
          <>
            <Text style={{ marginBottom: 10 }}>{label}</Text>
            <TextInput
              defaultValue={isEdit ? defaultPickupVal : null}
              onChangeText={(text) => {
                setError({});
                setValues((states) => ({
                  ...states,
                  [params.isInternationalActive ? "trackingId" : "address"]:
                    text,
                }));
              }}
              placeholder={
                params.isInternationalActive
                  ? "Enter Tracking ID"
                  : "Enter Address"
              }
              placeholderTextColor={"white"}
              style={{
                backgroundColor: "#4E4E4E",
                borderRadius: 5,
                ...(isMultiple && {
                  marginBottom: error?.[
                    params.isInternationalActive ? "trackingId" : "address"
                  ]
                    ? 5
                    : 20,
                }),
                marginVertical: 5,
                padding: 10,
                color: "#fff",
              }}
            />
            {error?.[
              params.isInternationalActive ? "trackingId" : "address"
            ] && (
              <ErrorText
                style={{
                  ...(isMultiple && {
                    marginBottom: 15,
                  }),
                }}
              >
                Enter Correct
                {params.isInternationalActive ? "Tracking Id" : "Address"}
              </ErrorText>
            )}
          </>
        )}

        {(isMultiple || isDropScreen) && (
          <>
            <Text style={{ marginBottom: 10 }}>Enter DropOff Location</Text>

            <TextInput
              defaultValue={isEdit ? defaultDropVal : false}
              onChangeText={(text) => {
                setError({});
                setValues((states) => ({
                  ...states,
                  dropOff: { ...states?.dropOff, address: text },
                }));
              }}
              placeholder={"Enter Drop Off Address"}
              placeholderTextColor={"white"}
              style={{
                backgroundColor: "#4E4E4E",
                borderRadius: 5,
                marginVertical: 5,
                padding: 10,
                color: "#fff",
              }}
            />
            {error?.dropOffAddress && (
              <ErrorText>Enter Correct DropOff Address</ErrorText>
            )}
          </>
        )}
      </Section>
      {!notShowSaved && (
        <Section>
          {pickUps.length > 0 && (
            <View
              style={{
                ...(isMultiple && { marginBottom: 20 }),
              }}
            >
              <Text style={{ marginBottom: 10 }}>Saved Pick-up Addresses</Text>
              <FlatList
                data={pickUps}
                horizontal
                renderItem={({ item, index }) => (
                  <AddressBox text={`Address ${index}`} />
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
          {dropOffs.length > 0 && isMultiple && (
            <View>
              <Text style={{ marginBottom: 10 }}>Saved Drop-Off Addresses</Text>
              <FlatList
                data={dropOffs}
                horizontal
                renderItem={({ item, index }) => (
                  <AddressBox text={`Address ${index}`} />
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
        </Section>
      )}
    </>
  );
};
