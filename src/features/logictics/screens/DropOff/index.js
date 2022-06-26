import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Pressable, TextInput, View } from "react-native";
import Header from "../../../../components/Header";
import Selector from "../../../../components/Selector";
import { countries } from "countries-list";
import {
  Layout,
  LayoutScrollView,
  Section,
  Text,
} from "../../../../components/Layout";
import AddressBox from "../../components/AddressBox/AddressBox";
import { useState } from "react";
import { Button } from "../../../../components/Button";
import MultiItem from "../../components/MultiItem";
import { Row } from "../../components/VehicleType/styles";
import AddLocationInput from "../../components/AddLocationInput";

const itemCategory = ["Food"];
export default () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [values, setValues] = useState(null);
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const codes = [];
  for (let code in countries) {
    codes.push(`+ ${countries[code].phone}`);
  }
  return (
    <LayoutScrollView
      style={{
        paddingHorizontal: 30,
      }}
    >
      <Header
        iconLeft={require("../../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
        headerTitle={"Drop-Off Location"}
        headerTitleStyle={{
          color: "#C3AD60",
        }}
        iconRight={require("../../../../../assets/cancel.png")}
      />
      {params.multiDropOff && (
        <FlatList
          data={["", "", ""]}
          renderItem={() => (
            <MultiItem
              title="Drop-Off Location"
              address="15 AP street, Federal Low-cost Housing Estate, Ikorodu."
              containerStyle={{
                marginRight: 10,
                width: 310,
              }}
              bottomComp={
                <>
                  <Text style={{ color: "#000" }}>Receiver’s Name</Text>
                  <Text style={{ color: "#000" }}>Receiver’s Phone</Text>
                </>
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
        />
      )}

      <AddLocationInput label={"Add DropOff Location"} setValues={setValues} />

      {/* Category Selector */}
      <Section
        style={{
          alignItems: "center",
          marginTop: 5,
          marginBottom: 0,
        }}
      >
        <Selector
          data={itemCategory}
          buttonStyle={{
            marginVertical: 20,
            width: "100%",
          }}
          dropdownIconPosition={"right"}
          defaultButtonText="Select Item Category"
          buttonTextStyle={{
            fontSize: 20,
          }}
        />
        <View
          style={{
            borderBottomColor: "#C3AD60",
            borderWidth: 1,
            width: "100%",
          }}
        />
      </Section>

      <Section>
        <View>
          <View
            style={{
              borderBottomColor: "#C4C4C4",
              borderWidth: 1,
            }}
          >
            <TextInput
              onChangeText={(text) =>
                setValues((states) => ({ ...states, receiversName: text }))
              }
              placeholder={"Receiver’s name"}
              placeholderTextColor={"white"}
              style={{
                borderRadius: 5,
                marginVertical: 5,
                color: "#fff",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Selector
            buttonStyle={{
              backgroundColor: "transparent",
              width: "25%",
            }}
            dropDownIconColor={"#C4C4C4"}
            data={codes}
            setSelectedItem={setSelectedCountryCode}
            buttonTextStyle={{
              color: "#C4C4C4",
            }}
            dropDownIconSize={15}
            defaultButtonText={`+${countries.NG.phone}`}
          />

          <View
            style={{
              borderBottomColor: "#C4C4C4",
              borderWidth: 1,
              width: 252,
            }}
          >
            <TextInput
              onChangeText={(text) =>
                setValues((states) => ({
                  ...states,
                  receiversPhone: selectedCountryCode + text,
                }))
              }
              placeholder={"Receiver’s Phone"}
              placeholderTextColor={"white"}
              style={{
                borderRadius: 5,
                marginVertical: 5,
                color: "#fff",
                width: "100%",
              }}
              keyboardType={"number-pad"}
            />
          </View>
        </View>
      </Section>

      <Section>
        {params.multiDropOff && (
          <Button style={{ marginBottom: 10 }}>
            <Text style={{ color: "#C3AD60", fontSize: 24 }}>Add New</Text>
          </Button>
        )}

        <Button
          style={{ backgroundColor: "#C3AD60" }}
          onPress={() => navigate("confirmOrder", params)}
        >
          <Text style={{ color: "#000", fontSize: 24 }}>Continue</Text>
        </Button>
      </Section>
    </LayoutScrollView>
  );
};
