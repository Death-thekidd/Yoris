import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { UserAccordion } from "..";
import { Constants } from "../../../../../../../constants/db.mock";
import FlatlistSeperator from "../../../../../../components/FlatlistSeperator";
import { Layout, Section, Text } from "../../../../../../components/Layout";
import { Row } from "../../../../../logictics/components/VehicleType/styles";
import { Detail, Title } from "../Express/style";
import OtpInputModal from "../../../../../../components/OtpInputModal/Index";
export default () => {
  const [newOrders, setNewOrders] = useState([{}, {}, {}, {}, {}, {}]);
  // const onOtpValidate =
  return (
    <Layout>
      <FlatList
        data={newOrders}
        ItemSeparatorComponent={FlatlistSeperator}
        renderItem={() => (
          <UserAccordion
            details={true}
            BottomComponent={() => <OtpInputModal buttonText={"Dropped Off"} />}
          />
        )}
      />
    </Layout>
  );
};
