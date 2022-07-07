import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Pressable, TextInput, View } from "react-native";
import Header from "../../../../components/Header";
import Selector from "../../../../components/Selector";
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
import { isArray } from "lodash";
import { isObject } from "lodash";

const itemCategory = ["Food"];
export default () => {
  const { params } = useRoute();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [values, setValues] = useState(null);
  const [dropOff, setDropOff] = useState(
    params.multiDropOff ? [] : params.singleDropOff && {}
  );

  const { goBack, navigate } = useNavigation();

  useEffect(() => {
    console.log("ParamsPickup =>", params["pickup" || "pickups"]);
    console.log("Params =>", params);
    console.log("DropOffs =>", dropOff);
    console.log("Values =>", values);
  }, [dropOff, values, params]);
  const addDrop = useCallback(() => {
    // check if single pickup to multi drops
    if (params.singlePickup && params.multiDropOff)
      setDropOff((prevDrops) => [
        ...prevDrops,
        { ...prevDrops.dropOff, ...values.dropOff },
      ]);
    // check if multi pickup to single drop
    if (params.multiPickup && params.singleDropOff)
      setDropOff((prevDrops) => ({
        ...prevDrops.dropOff,
        ...values.dropOff,
      }));
  });
  const onSaveInfo = () => {
    const { pickups, pickup, ...rest } = params;
    navigate("confirmOrder", {
      ...rest,
      info: {
        ...(pickup && pickup),
        ...(pickups && { pickups }),
        category: selectedCategory,
        [params.multiDropOff ? "dropOffs" : params.singleDropOff && "dropOff"]:
          params.multiDropOff
            ? dropOff
            : params.singleDropOff && values.dropOff && { ...values.dropOff },
      },
    });
  };

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
          color: Constants.theme.primary,
        }}
        iconRight={require("../../../../../assets/cancel.png")}
      />
      {params.multiDropOff && (
        <FlatList
          data={dropOff}
          renderItem={({ item, index }) => (
            <MultiItem
              title="Drop-Off Location"
              address={item?.address}
              containerStyle={{
                marginRight: 10,
                width: 310,
              }}
              bottomComp={
                <>
                  <Text style={{ color: Constants.theme.dark }}>
                    {item?.receiversName}
                  </Text>
                  <Text style={{ color: Constants.theme.dark }}>
                    {item?.receiversPhone}
                  </Text>
                </>
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
        />
      )}

      <AddLocationInput
        isDropScreen
        label={"Add DropOff Location"}
        setValues={setValues}
      />

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
          style={{
            backgroundColor: Constants.theme.primary,
          }}
          onPress={onSaveInfo}
        >
          <Text style={{ color: Constants.theme.dark, fontSize: 24 }}>
            Continue
          </Text>
        </Button>
      </Section>
    </LayoutScrollView>
  );
};
