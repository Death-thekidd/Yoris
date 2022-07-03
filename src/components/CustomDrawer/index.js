import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import DrawerHeader from "../../features/riders/components/DrawerHeader";
import DrawerFooter from "../../features/riders/components/DrawerFooter";
import { FontAwesome } from "../Icons";
import { Constants } from "../../../constants/db.mock";

const drawerContent = [
  {
    title: "Switch Profile",
    drawerIcon: (props) => <FontAwesome {...props} name="exchange-alt" />,
  },
  {
    title: "Switch to Light Mode",
    drawerIcon: (props) => <FontAwesome {...props} name="sun" />,
  },
  {
    title: "Share",
    drawerIcon: (props) => <FontAwesome {...props} name="share-alt" />,
  },

  {
    title: "Settings",
    drawerIcon: (props) => <FontAwesome {...props} name="cog" />,
  },
];

export default (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: Constants.theme.dark,
        height: "100%",
      }}
    >
      <DrawerHeader />
      <DrawerItemList {...props} />
      {drawerContent.map((screen) => (
        <DrawerItem
          label={screen.title}
          icon={screen.drawerIcon}
          activeTintColor={"#fff"}
          inactiveTintColor="#fff"
          style={{
            marginVertical: 20,
          }}
        />
      ))}
      <DrawerFooter />
    </DrawerContentScrollView>
  );
};
