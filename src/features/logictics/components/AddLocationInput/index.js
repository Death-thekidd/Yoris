import { useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { Section, Text } from "../../../../components/Layout";
import AddressBox from "../AddressBox/AddressBox";
import { ErrorText } from "./styles";

export default ({
  isMultiple,
  dropOffs = [],
  pickUps = [],
  notShowSaved,
  errors,
  Input,
  Controller,
  control,
  isDropScreen,
}) => {
  const { params } = useRoute();

  const pickupCond = params.isInternationalActive
    ? "trackingId"
    : "pickUpAddress";

  const inputs = [
    {
      label: params.isInternationalActive
        ? "Add Tracking ID"
        : "Add Pickup Location",
      name: pickupCond,
      required: true,
      style: {
        backgroundColor: "#4E4E4E",
        borderRadius: 5,
        marginVertical: 5,
        padding: 10,
        color: "#fff",
      },

      placeholder: params.isInternationalActive
        ? "Enter Tracking ID"
        : "Enter Pick Up Address",
      placeholderTextColor: "white",
      error: () => (
        <>
          {errors?.[pickupCond] && (
            <ErrorText>
              {errors?.[pickupCond].type === "required" &&
              params.isInternationalActive
                ? "Please Enter Track ID"
                : "Please Enter Pickup Location"}
            </ErrorText>
          )}
        </>
      ),
    },
    {
      label: "Enter Phone Number",
      name: "pickUpPhone",
      required: true,
      phoneNumber: true,
      keyboardType: "phone-pad",
      style: {
        backgroundColor: "#4E4E4E",
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
        color: "#fff",
      },

      placeholder: "Enter Phone Number",
      placeholderTextColor: "white",
      error: () => (
        <>
          {errors?.pickUpPhone && (
            <ErrorText>
              {errors?.pickUpPhone.type === "required"
                ? "Please Enter Pickup Phone"
                : errors?.pickUpPhone.type === "pattern" &&
                  "Please Enter a correct number"}
            </ErrorText>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <Section
        style={{
          marginBottom: 0,
        }}
      >
        {!isDropScreen &&
          inputs.map((item, index) => (
            <>
              <Text
                style={{
                  marginBottom: 5,
                  marginTop: index === 0 ? 0 : 20,
                }}
              >
                {item.label}
              </Text>
              <Input
                name={item.name}
                Controller={Controller}
                control={control}
                required
                phoneNumber={item.phoneNumber}
                keyboaredType={item.keyboardType}
                style={item.style}
                placeholder={item.placeholder}
                placeholderTextColor={item.placeholderTextColor}
              />
              {item.error()}
            </>
          ))}

        {(isMultiple || isDropScreen) && (
          <>
            <Text style={{ marginTop: 20 }}>Add Drop Location</Text>
            <Input
              required
              name={"dropOffAddress"}
              Controller={Controller}
              control={control}
              style={{
                backgroundColor: "#4E4E4E",
                borderRadius: 5,
                marginVertical: 5,
                padding: 10,
                color: "#fff",
              }}
              placeholder={"Enter Drop Off Address"}
              placeholderTextColor={"white"}
            />
            {errors?.dropOffAddress && (
              <ErrorText>
                {errors?.dropOffAddress.type === "required" &&
                  "Please Enter Drop Off Location"}
              </ErrorText>
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
