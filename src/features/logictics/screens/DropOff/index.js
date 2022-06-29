import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Pressable, TextInput, View } from "react-native";
import Header from "../../../../components/Header";
import Selector from "../../../../components/Selector";
import { countries } from "countries-list";
import { getCodes } from "country-list";
import {
  Layout,
  LayoutScrollView,
  Section,
  Text,
} from "../../../../components/Layout";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import MultiItem from "../../components/MultiItem";
import AddLocationInput from "../../components/AddLocationInput";
import InfoInput from "../../components/InfoInput";
import { Constants } from "../../../../../constants/db.mock";

const itemCategory = ["Food"];
export default () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [values, setValues] = useState(null);
  const [dropOff, setDropOff] = useState([]);

  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();

  useEffect(() => console.log("DropOffs =>", dropOff), [dropOff]);
  const addDrop = useCallback(() =>
    setDropOff((prevState) => [...prevState, { ...params.pickups, values }])
  );

  return (
    <LayoutScrollView
      style={{
        paddingHorizontal: 30,
      }}
    >
      <Header
        iconLeft={require("../../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
        onRightIconPress={() => navigate("mainLogistics")}
        headerTitle={"Drop-Off Location"}
        headerTitleStyle={{
          color: Constants.themeConstants.primary,
        }}
        iconRight={require("../../../../../assets/cancel.png")}
      />
      {params.multiDropOff && (
        <FlatList
          data={dropOff}
          renderItem={({ item, index }) => (
            <MultiItem
              title="Drop-Off Location"
              address={item.dropOff}
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
          setSelectedItem={setSelectedCategory}
        />
        <View
          style={{
            borderBottomColor: Constants.theme.primary,
            borderWidth: 1,
            width: "100%",
            marginBottom: 25,
          }}
        />
        <InfoInput
          setValues={setValues}
          namePlaceholder={"Receiver’s name"}
          phonePlaceholder={"Receiver’s Phone"}
        />
      </Section>

      <Section>
        {params.multiDropOff && (
          <Button style={{ marginBottom: 10 }} onPress={addDrop}>
            <Text style={{ color: Constants.theme.primary, fontSize: 24 }}>
              Add New
            </Text>
          </Button>
        )}

        <Button
          style={{ backgroundColor: Constants.theme.primary }}
          onPress={() => navigate("logisticBooking", params)}
        >
          <Text style={{ color: "#000", fontSize: 24 }}>Continue</Text>
        </Button>
      </Section>
    </LayoutScrollView>
  );
};
