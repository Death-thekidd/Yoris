import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";
import ImagePicker from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  FirstView2,
  BigText2,
  SecondView2,
  Imagebox,
  BtnText,
} from "../componenets/fintech3Style";
import { Camera, CameraType } from "expo-camera";

const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

export default function Fintech3({ navigation }) {
  const [data, setData] = useState({
    filepath: {
      data: "",
      uri: "",
    },
    fileData: "",
    fileUri: "",
  });

  const chooseImage = () => {
    let options = {
      title: "Select Image",
      customButtons: [
        { name: "customOptionKey", title: "Choose Photo from Custom Option" },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log("response", JSON.stringify(response));
        setData({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  const launchCamera_ = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchCamera(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log("response", JSON.stringify(response));
        setData({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  const launchImageLibrary_ = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log("response", JSON.stringify(response));
        setData({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  const renderFileData = () => {
    if (data.fileData) {
      return (
        <Image
          source={{ uri: "data:image/jpeg;base64," + data.fileData }}
          style={styles.images}
        />
      );
    } else {
      return <Icon2 size={64} color="#808080" name="image" />;
    }
  };

  return (
    <SafeAreaView style={styles.fintech3container}>
      <ScrollView>
        <FirstView2>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon size={30} color="#C3AD60" name="back" />
          </TouchableOpacity>
          <BigText2>Procurement</BigText2>
          <View></View>
        </FirstView2>
        <SecondView2>
          <TouchableOpacity onPress={launchImageLibrary_}>
            <Imagebox>{renderFileData()}</Imagebox>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("Procurement4")}
          >
            <BtnText>Upload</BtnText>
          </TouchableOpacity>
        </SecondView2>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fintech3container: {
    backgroundColor: "#000",
    paddingTop: 20,
    flex: 1,
  },
  back1: {
    padding: 10,
  },
  images: {
    height: 180,
    width: 180,
    borderRadius: 20,
  },
  pad2: {
    paddingLeft: 30,
  },
  pad3: {
    paddingLeft: 59,
  },
  button1: {
    width: 180,
    height: 48,
    backgroundColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 48,
  },
});
