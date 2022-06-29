import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Constants } from "../../../../../constants/db.mock";
import { Button } from "../../../../components/Button";
import Header from "../../../../components/Header";
import { Layout, LayoutScrollView, Text } from "../../../../components/Layout";
import MultiItem from "../../components/MultiItem";
import Detail from "./Detail";

import { Seperator } from "./styles";

export default () => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();

  return (
    <LayoutScrollView
      style={{
        paddingHorizontal: 35,
      }}
    >
      <Header
        iconLeft={require("../../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
        headerTitle={"Confirm Details"}
        headerTitleStyle={{
          color: Constants.theme.primary,
        }}
        iconRight={require("../../../../../assets/cancel.png")}
      />

      {params.singleDropOff ||
        (params.singlePickup && (
          <MultiItem
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: Constants.theme.primary,
              borderWidth: 1,
              marginVertical: 25,
            }}
            title={
              params.singleDropOff ? "Drop-Off Location" : "Pickup Location"
            }
            titleStyle={{
              color: Constants.theme.primary,
              fontWeight: "500",
            }}
            address={"123, Lorem street, Ibeju Lekki, Lagos."}
            addressStyle={{
              color: "#fff",
            }}
            {...(params.singleDropOff && {})}
            bottomComp={
              params.singleDropOff && (
                <>
                  <Text style={{ color: "#4E4E4E" }}>Receiver’s Name</Text>
                  <Text style={{ color: "#4E4E4E" }}>Receiver’s Phone</Text>
                </>
              )
            }
          />
        ))}

      {params.singlePickup && params.singleDropOff ? (
        <>{/* for single packages/orders */}</>
      ) : (
        <FlatList
          data={["", "", "", "", "", ""]}
          renderItem={() => <Detail />}
          ItemSeparatorComponent={() => <Seperator />}
        />
      )}

      <Button
        style={{ marginVertical: 24 }}
        onPress={() => navigate("paymentOptions")}
      >
        <Text style={{ fontSize: 24 }}>Continue</Text>
      </Button>
    </LayoutScrollView>
  );
};
