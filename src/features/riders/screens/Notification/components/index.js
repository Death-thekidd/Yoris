import { useState } from "react";
import { Image, View } from "react-native";
import { List } from "react-native-paper";
import { Section, Text } from "../../../../../components/Layout";
import { PressableSection } from "../../../../../components/Layout/styles";
import { Row } from "../../../../logictics/components/VehicleType/styles";

export const UserAccordion = ({ BottomComponent }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <PressableSection
      style={{ flexDirection: "row", justifyContent: "space-evenly" }}
    >
      <Image
        style={{
          width: 64,
          height: 64,
          // marginRight: 500,
        }}
        source={require("../../../../../../assets/profile.png")}
      />
      <View style={{}}>
        <Text
          style={{
            color: "#C3AD60",
            fontSize: 20,
          }}
        >
          User 4 ordered XXXXXX
        </Text>
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#C4C4C4",
              marginRight: 10,
            }}
          >
            8/3/2022
          </Text>
          <Text
            style={{
              color: "#C4C4C4",
              marginRight: 10,
            }}
          >
            N0.00
          </Text>
          <Text
            style={{
              color: "#C4C4C4",
              marginRight: 10,
            }}
          >
            0.7km Away
          </Text>
        </Row>
        {BottomComponent && <BottomComponent />}
      </View>
    </PressableSection>
  );
};
