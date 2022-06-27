import { FlatList, TextInput, View } from "react-native";
import { Section, Text } from "../../../../components/Layout";
import AddressBox from "../AddressBox/AddressBox";

export default ({ setValues, label, isMultiple }) => {
  return (
    <>
      <Section
        style={{
          marginBottom: 0,
        }}
      >
        <>
          <Text style={{ marginBottom: 10 }}>{label}</Text>
          <TextInput
            onChangeText={(text) =>
              setValues((states) => ({ ...states, address: text }))
            }
            placeholder={"Address"}
            placeholderTextColor={"white"}
            style={{
              backgroundColor: "#4E4E4E",
              borderRadius: 5,
              ...(isMultiple && { marginBottom: 20 }),
              marginVertical: 5,
              padding: 10,
              color: "#fff",
            }}
          />
        </>
        {isMultiple && (
          <>
            <Text style={{ marginBottom: 10 }}>Enter DropOff Location</Text>
            <TextInput
              onChangeText={(text) =>
                setValues((states) => ({
                  ...states,
                  dropOff: { address: text },
                }))
              }
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
          </>
        )}
      </Section>
      <Section>
        <View
          style={{
            ...(isMultiple && { marginBottom: 20 }),
          }}
        >
          <Text style={{ marginBottom: 10 }}>Saved Pick-up Addresses</Text>
          <FlatList
            data={["add 1", "", "", ""]}
            horizontal
            renderItem={({ item, index }) => (
              <AddressBox text={`Address ${index}`} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {isMultiple && (
          <View>
            <Text style={{ marginBottom: 10 }}>Saved Drop-Off Addresses</Text>
            <FlatList
              data={["add 1", "", "", ""]}
              horizontal
              renderItem={({ item, index }) => (
                <AddressBox text={`Address ${index}`} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      </Section>
    </>
  );
};
