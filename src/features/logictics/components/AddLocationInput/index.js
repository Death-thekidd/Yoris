import { FlatList, TextInput } from "react-native";
import { Section, Text } from "../../../../components/Layout";
import AddressBox from "../AddressBox/AddressBox";

export default ({ setValues, label }) => {
  return (
    <>
      <Section
        style={{
          marginBottom: 0,
        }}
      >
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
            marginVertical: 5,
            padding: 10,
            color: "#fff",
          }}
        />
      </Section>
      <Section>
        <Text style={{ marginBottom: 10 }}>Saved Addresses</Text>
        <FlatList
          data={["add 1", "", "", ""]}
          horizontal
          renderItem={({ item, index }) => (
            <AddressBox text={`Address ${index}`} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </Section>
    </>
  );
};
