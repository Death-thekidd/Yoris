import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, FlatList, View } from "react-native";
import { Constants } from "../../../../../constants/db.mock";
import { Button } from "../../../../components/Button";
import Header from "../../../../components/Header";
import { LayoutScrollView, Section, Text } from "../../../../components/Layout";
import Selector from "../../../../components/Selector";
import useEditInfoBottomSheet from "../../../../hooks/useEditInfoBottomSheet";
import AddLocationInput from "../../components/AddLocationInput";
import InfoInput from "../../components/InfoInput";
import MultiItem from "../../components/MultiItem";
import VehicleType from "../../components/VehicleType";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GOOGLE_MAPS_DIRECTIONS_API } from "@env";
import * as Location from "expo-location";
import { countries } from "countries-list";
import useInput from "../../../../hooks/useInput";
import { useForm, Controller } from "react-hook-form";
import { isEqual } from "lodash";
import Modal from "../../../../components/Modal";

const itemCategory = ["Food"];
const vehicles = [
  {
    desc: "Medium - Large size packages.",
    imgSrc: require("../../../../../assets/bus.png"),
    vehicle: "Pick-Up Truck",
  },
  {
    desc: "Small - Medium size packages.",
    imgSrc: require("../../../../../assets/motocycle.png"),
    vehicle: "Motorcycle",
  },
  {
    desc: "Medium - Large size packages, inter state.",
    imgSrc: require("../../../../../assets/bus.png"),
    vehicle: "Bus",
  },
];

export default () => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const pickupCond = params.isInternationalActive ? "trackingId" : "address";
  // states
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [values, setValues] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [presentItemIndex, setPresentItemIndex] = useState(null);
  const [errMsg, setErrorMsg] = useState();
  const [location, setLocation] = useState();
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    `+${countries.NG.phone}`
  );
  const {
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    control,
  } = useForm();

  const isMultiple = params.multiPickup && params.multiDropOff;
  const onVehicleChange = (key) => setSelectedVehicle(key);

  const { BottomSheetModalComponent, handlePresentModalPress } =
    useEditInfoBottomSheet();

  const { Input } = useInput();

  const onSaveAddress = handleSubmit((data) => {
    console.log(data);
    const newInfo = {
      [pickupCond]: params.isInternationalActive
        ? "trackingId"
        : "pickUpAddress",
      vehicle: values?.vehicle,
      category: values?.category,
      ...(isMultiple && {
        dropOff: {
          address: data.dropOffAddress,
          receiversName: data.receiversName,
          receiversPhone: data.receiversPhone,
        },
      }),
    };

    navigate(!isMultiple ? "dropOff" : "confirmOrder", {
      ...params,
      // if
      ...(!params.multiPickup
        ? { pickup: newInfo }
        : {
            pickups: savedAddresses.length > 0 ? savedAddresses : [newInfo],
          }),
    });
  });

  const useCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location.coords.latitude},${location.coords.longitude}&key=${GOOGLE_MAPS_DIRECTIONS_API}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          `ADDRESS GEOCODE is BACK!! => ${JSON.stringify(responseJson)}`
        );
      });
    setLocation(location);
  };

  useEffect(() => {
    setValues((states) => ({
      ...states,
      category: selectedCategory,
      vehicle: vehicles[selectedVehicle].vehicle,
    }));
  }, [selectedVehicle, selectedCategory]);

  return (
    <BottomSheetModalProvider>
      <LayoutScrollView style={{ paddingHorizontal: 30 }}>
        <Header
          iconLeft={require("../../../../../assets/backIcon.png")}
          onLeftIconPress={() => goBack()}
          onRightIconPress={() => navigate("logisticsMain")}
          headerTitle={!isMultiple ? "Pickup Location" : "Enter Information"}
          headerTitleStyle={{
            color: Constants.theme.primary,
          }}
          iconRight={require("../../../../../assets/cancel.png")}
        />

        {params.multiPickup && (
          <FlatList
            data={savedAddresses}
            renderItem={({ index, item }) => (
              <MultiItem
                title={
                  params.isInternationalActive
                    ? "Tracking ID"
                    : "Pick-Up Location"
                }
                address={item?.[pickupCond]}
                dropOffAddress={isMultiple && item?.dropOff.address}
                containerStyle={{
                  marginRight: 10,
                  width: 310,
                }}
                isMultiple={isMultiple}
                onItemPress={() => {
                  setPresentItemIndex(index);
                  handlePresentModalPress();
                }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"center"}
          />
        )}

        <Button
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 0,
            borderWidth: 0,
          }}
          onPress={useCurrentLocation}
        >
          <Image source={require("../../../../../assets/mapPointerGold.png")} />
          <Text style={{ fontSize: 24 }}>Use Current Location</Text>
        </Button>

        <AddLocationInput
          errors={errors}
          Input={Input}
          isMultiple={isMultiple}
          Controller={Controller}
          control={control}
        />

        <Section
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={vehicles}
            renderItem={({ item, index }) => (
              <VehicleType
                itemKey={index}
                onVehicleSelect={onVehicleChange}
                selectedVehicle={selectedVehicle}
                desc={item.desc}
                imgSrc={item.imgSrc}
                vehicle={item.vehicle}
              />
            )}
            numColumns={2}
          />
        </Section>
        {isMultiple && (
          <Section>
            {/* Category Selector */}
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
              Input={Input}
              errors={errors}
              setError={setError}
              setValue={setValue}
              control={control}
              Controller={Controller}
              namePlaceholder={"Receiver’s name"}
              phonePlaceholder={"Receiver’s Phone"}
              selectedCountryCode={selectedCountryCode}
              setSelectedCountryCode={setSelectedCountryCode}
            />
          </Section>
        )}

        <Section>
          {params.multiPickup && (
            <Button
              style={{ marginBottom: 10 }}
              onPress={handleSubmit((data) =>
                setSavedAddresses((prevPickups) => {
                  const newInfo = {
                    [pickupCond]:
                      data[
                        params.isInternationalActive
                          ? "trackingId"
                          : "pickUpAddress"
                      ],
                    vehicle: vehicles[selectedVehicle]?.vehicle,
                    ...(isMultiple && {
                      dropOff: {
                        address: data.dropOffAddress,
                        receiversName: data.receiversName,
                        receiversPhone: data.receiversPhone,
                      },
                    }),
                  };

                  let newArr, match;
                  for (let index = 0; index <= prevPickups.length; index++) {
                    const element = prevPickups[index];
                    // if there is a match
                    if (isEqual(newInfo, element)) {
                      match = true;
                      break;
                    }
                  }

                  if (!match) {
                    newArr = [...prevPickups, newInfo];
                  } else {
                    newArr = [...prevPickups];
                  }

                  return newArr;
                })
              )}
            >
              <Text style={{ color: Constants.theme.primary, fontSize: 24 }}>
                {!isMultiple && !params.isInternationalActive
                  ? "Add More Pickup"
                  : params.isInternationalActive
                  ? "Add More Track ID's"
                  : "Add More Address"}
              </Text>
            </Button>
          )}

          {savedAddresses?.length > 0 && (
            <BottomSheetModalComponent
              selectedVehicleIndex={selectedVehicle}
              info={savedAddresses[presentItemIndex]}
              index={presentItemIndex}
              isMultiple={isMultiple}
              vehicles={vehicles}
              itemCategory={itemCategory}
              setSavedAddresses={setSavedAddresses}
            />
          )}

          {params.isInternationalActive ? (
            <Button onPress={onSaveAddress}>
              <Text>Conctinue</Text>
            </Button>
          ) : (
            <>
              <Modal
                buttonColor={Constants.theme.dark}
                ModalTitle={() => (
                  <Text
                    style={{
                      fontSize: 24,
                      color: Constants.theme.light,
                      marginBottom: 15,
                    }}
                  >
                    Save New Address?
                  </Text>
                )}
                BottomRow={() => (
                  <>
                    <Button
                      style={{
                        backgroundColor: Constants.theme.dark,
                        marginRight: 30,
                        paddingHorizontal: 30,
                      }}
                      onPress={() => {
                        setModalVisible(false);
                        navigate(!isMultiple ? "dropOff" : "confirmOrder", {
                          ...params,
                          // if
                          ...(!params.multiPickup
                            ? { pickup: newInfo }
                            : {
                                pickups:
                                  savedAddresses.length > 0
                                    ? savedAddresses
                                    : [newInfo],
                              }),
                        });
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 24 }}>No</Text>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: Constants.theme.primary,
                        paddingHorizontal: 30,
                      }}
                      onPress={onSaveAddress} //save address on user account then move to the next
                    >
                      <Text
                        style={{ color: Constants.theme.dark, fontSize: 24 }}
                      >
                        Yes
                      </Text>
                    </Button>
                  </>
                )}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                modalButtonCallBack={handleSubmit(() => {
                  setModalVisible(true);
                })}
              />
            </>
          )}
          {/* Modal */}
        </Section>
      </LayoutScrollView>
    </BottomSheetModalProvider>
  );
};
