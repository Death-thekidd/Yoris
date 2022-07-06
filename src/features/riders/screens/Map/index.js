import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Polyline } from "react-native-maps";

export default () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1.5,
      }}
    >
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          flex: 1,
        }}
        mapType={"mutedStandard"}
      >
        <Polyline
          coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
            { latitude: 37.7896386, longitude: -122.421646 },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            "#E5845C",
            "#238C23",
            "#7F0000",
          ]}
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};
