import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import DrawerHeader from "../../features/riders/components/DrawerHeader";
import DrawerFooter from "../../features/riders/components/DrawerFooter";

export default (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#000",
      }}
    >
      <DrawerHeader />
      <DrawerItemList {...props} />
      <DrawerFooter />
    </DrawerContentScrollView>
  );
};
