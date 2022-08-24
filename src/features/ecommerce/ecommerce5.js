import React from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { VectorHeader3 } from "../../components/screenComponents/components";
import styled from "styled-components/native";
import Icon4 from "react-native-vector-icons/AntDesign";
import { status } from "./list";

const StyledText = styled.Text`
  width: 249px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;

const StyledVertical = styled.View`
  width: 75px;
  height: 0px;
  background-color: #fff;
  border: 1.5px solid #ffffff;
  transform: rotate(90deg);
`;
const ProductDescription = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;

const Description = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: -0.3333333432674408px;
  text-align: left;

  color: #ffffff;
`;

const StyledButton = styled.TouchableOpacity`
  width: 320px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: #c3ad60;
  border-radius: 30px;
`;

const StyledButton2 = styled.TouchableOpacity`
  width: 320px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const BuyNow = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #000000;
`;

const Add = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #c3ad60;
`;

export default function Ecommerce5({ navigation, route }) {
  const handleCart = () => {
    navigation.navigate("Ecommerce6");
  };
  const handleSearch = () => {
    navigation.navigate("Filter");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          right: 0,
          marginRight: 20,
          marginBottom: 30,
          bottom: 0,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <View style={styles.message}>
          <Icon4 name="message1" size={25} color="#000" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VectorHeader3
          goBack={() => navigation.goBack()}
          handleBrandView={() => handleBrandView()}
          handleCart={() => handleCart()}
          handleSearch={() => handleSearch()}
        />
        <View>
          <Image source={route.params.image} style={styles.image} />
        </View>
        <View style={styles.topText}>
          <StyledText>Product Name N0.00</StyledText>
        </View>
        <View style={styles.deliveryView}>
          <Text>
            DELIVERY: <Text style={{ fontWeight: "bold" }}>N0.00</Text>
          </Text>
        </View>
        <View style={styles.description}>
          <StyledVertical></StyledVertical>
          <Text style={{ flexDirection: "column" }}>
            <ProductDescription>Product Description:</ProductDescription>
            <Description>
              This is a more detailed description of product with dimensions and
              special features/ specifications.
            </Description>
          </Text>
        </View>

        <View style={styles.buyNow}>
          <StyledButton onPress={() => navigation.navigate("Ecommerce8")}>
            <BuyNow>Buy Now</BuyNow>
          </StyledButton>
        </View>
        <View style={styles.buyNow}>
          <StyledButton2 onPress={() => navigation.navigate("Ecommerce6")}>
            <Add>Add to Cart</Add>
          </StyledButton2>
        </View>
        <View style={{ marginTop: 45 }}>
          <View style={{ margin: 10 }}>
            <Text style={{ color: "#C3AD60", margin: 25 }}>
              Similar products from some brands
            </Text>
            <FlatList
              data={status}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.imageView}
                  onPress={() =>
                    navigation.navigate("Ecommerce3", {
                      image: item.image,
                      store: item.store,
                    })
                  }
                >
                  <Image
                    source={item.image}
                    style={styles.image2}
                    key={index}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: "#C3AD60", margin: 25 }}>
              People also bought
            </Text>
            <FlatList
              data={status}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.imageView}
                  onPress={() =>
                    navigation.navigate("Ecommerce3", {
                      image: item.image,
                      store: item.store,
                    })
                  }
                >
                  <Image
                    source={item.image}
                    style={styles.image2}
                    key={index}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 420,
  },
  topText: {
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  deliveryView: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#fff",
    width: "38%",
    height: 32,
    paddingRight: 8,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  message: {
    borderRadius: 50,
    width: 48,
    height: 48,
    backgroundColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
  },
  buyNow: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  image2: {
    borderRadius: 50,
    width: 55,
    height: 55,
    marginLeft: 25,
  },
});
