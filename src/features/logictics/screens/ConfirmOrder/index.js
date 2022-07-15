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
  const isMultiple = params.multiDropOff && params.multiPickup;

  const isSingle = params.singleDropOff || params.singlePickup;
  const isBothSingle = params.singleDropOff && params.singlePickup;

  console.log("params => ", params);
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
        onRightIconPress={() => navigate("logisticsMain")}
      />

      {isSingle && !isBothSingle && (
        <MultiItem
          containerStyle={{
            backgroundColor: "transparent",
            borderColor: Constants.theme.primary,
            borderWidth: 1,
            marginVertical: 25,
          }}
          title={params.singleDropOff ? "Drop-Off Location" : "Pickup Location"}
          titleStyle={{
            color: Constants.theme.primary,
            fontWeight: "500",
          }}
          address={params.info.address || params.info.dropOff.address}
          addressStyle={{
            color: "#fff",
          }}
          {...(params.singleDropOff && {})}
          bottomComp={
            params.singleDropOff && (
              <>
                <Text style={{ color: "#4E4E4E" }}>
                  {params.info.dropOff.receiversName}
                </Text>
                <Text style={{ color: "#4E4E4E" }}>
                  {params.info.dropOff.receiversPhone}
                </Text>
              </>
            )
          }
        />
      )}

      {params.singlePickup && params.singleDropOff ? (
        <>{/* for single packages/orders */}</>
      ) : (
        /* <Text>{JSON.stringify(params.info)}</Text> */
        <FlatList
          data={
            isSingle
              ? params.info.dropOffs
                ? params.info.dropOffs
                : params.info.pickups && params.info.pickups
              : isMultiple && params.pickups
          }
          renderItem={({ item, index }) => (
            <Detail
              key={index}
              isPickupSingle={params.singlePickup}
              isDropSingle={params.singleDropOff}
              pickupAddress={
                item[params.isInternationalActive ? "trackingId" : "address"]
              }
              address={
                item[params.isInternationalActive ? "trackingId" : "address"]
              }
              dropAddress={item.dropOff ? item?.dropOff.address : null}
            />
          )}
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
