import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { countries } from "countries-list";
import { Controller, useForm } from "react-hook-form";
import Header from "../../../../components/Header";
import Selector from "../../../../components/Selector";
import { LayoutScrollView, Section, Text } from "../../../../components/Layout";
import { Button } from "../../../../components/Button";
import MultiItem from "../../components/MultiItem";
import AddLocationInput from "../../components/AddLocationInput";
import InfoInput from "../../components/InfoInput";
import { Constants } from "../../../../../constants/db.mock";
import useEditInfoBottomSheet from "../../../../hooks/useEditInfoBottomSheet";
import useInput from "../../../../hooks/useInput";
import { isEqual } from "lodash";

const itemCategory = ["Food"];
export default () => {
  const { params } = useRoute();
  const { goBack, navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [values, setValues] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    `+${countries.NG.phone}`
  );
  const isMultiple = params.multiPickup && params.multiDropOff;
  const [presentItemIndex, setPresentItemIndex] = useState(null);
  const [dropOff, setDropOff] = useState(
    params.multiDropOff ? [] : params.singleDropOff && {}
  );
  const { Input } = useInput();
  const { BottomSheetModalComponent, handlePresentModalPress } =
    useEditInfoBottomSheet();
  const {
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    control,
  } = useForm();

  const addDrop = useCallback(
    handleSubmit((data) =>
      setDropOff((prevDrops) => {
        const newInfo = {
          /* ["address"]: data.pickUpAddress,
          vehicle: vehicles[selectedVehicle]?.vehicle,
 */
          address: data.dropOffAddress,
          receiversName: data.receiversName,
          receiversPhone: data.receiversPhone,
        };

        let newArr, match;
        for (let index = 0; index <= prevDrops.length; index++) {
          const element = prevDrops[index];
          // if there is a match
          if (isEqual(newInfo, element)) {
            match = true;
            break;
          }
        }

        if (!match) {
          newArr = [...prevDrops, newInfo];
        } else {
          newArr = [...prevDrops];
        }

        return newArr;
      })
    )
  );

  const onSaveInfo = handleSubmit((data) => {
    const { pickup, pickups, ...rest } = params;
    const newInfo = {
      ...rest,
      info: {
        ...(pickup && !rest.multiPickup && pickup),
        ...(pickups && rest.multiPickup && { pickups }),
        category: selectedCategory,

        ...(rest.multiDropOff
          ? {
              dropOffs:
                dropOff.length > 0
                  ? dropOff
                  : [
                      {
                        address: data.dropOffAddress,
                        receiversName: data.receiversName,
                        receiversPhone: data.receiversPhone,
                        category: selectedCategory,
                      },
                    ],
            }
          : rest.singleDropOff && {
              dropOff: {
                address: data.dropOffAddress,
                receiversName: data.receiversName,
                receiversPhone: data.receiversPhone,
                category: selectedCategory,
              },
            }),
      },
    };
    console.log(newInfo);
    navigate("confirmOrder", newInfo);
  });

  /*   useEffect(() => {
    console.log(dropOff);
  }, [dropOff]); */

  return (
    <BottomSheetModalProvider>
      <LayoutScrollView
        style={{
          paddingHorizontal: 30,
        }}
      >
        <Header
          iconLeft={require("../../../../../assets/backIcon.png")}
          onLeftIconPress={() => goBack()}
          onRightIconPress={() => navigate("logisticsMain")}
          headerTitle={"Drop-Off Location"}
          headerTitleStyle={{
            color: Constants.theme.primary,
          }}
          iconRight={require("../../../../../assets/cancel.png")}
        />
        {params.multiDropOff && (
          <FlatList
            data={dropOff}
            renderItem={({ item, index }) => (
              <MultiItem
                title="Drop-Off Location"
                address={item?.address}
                onItemPress={() => {
                  setPresentItemIndex(index);
                  handlePresentModalPress();
                }}
                containerStyle={{
                  marginRight: 10,
                  width: 310,
                }}
                bottomComp={
                  <>
                    <Text style={{ color: Constants.theme.dark }}>
                      {item?.receiversName}
                    </Text>
                    <Text style={{ color: Constants.theme.dark }}>
                      {item?.receiversPhone}
                    </Text>
                  </>
                }
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"center"}
          />
        )}

        <AddLocationInput
          Input={Input}
          isDropScreen
          label={"Add DropOff Location"}
          setValues={setValues}
          setError={setError}
          errors={errors}
          control={control}
          Controller={Controller}
        />

        {/* Category Selector */}
        <Section
          style={{
            alignItems: "center",
            marginTop: 5,
            marginBottom: 0,
          }}
        >
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
            control={control}
            Controller={Controller}
            namePlaceholder={"Receiver’s name"}
            phonePlaceholder={"Receiver’s Phone"}
            selectedCountryCode={selectedCountryCode}
            setSelectedCountryCode={setSelectedCountryCode}
          />
        </Section>

        <BottomSheetModalComponent
          info={dropOff[presentItemIndex]}
          index={presentItemIndex}
          isMultiple={isMultiple}
          itemCategory={itemCategory}
          setSavedAddresses={setDropOff}
          isDrop
        />

        <Section>
          {params.multiDropOff && (
            <Button style={{ marginBottom: 10 }} onPress={addDrop}>
              <Text style={{ color: Constants.theme.primary, fontSize: 24 }}>
                Add More DropOff
              </Text>
            </Button>
          )}

          <Button
            style={{
              backgroundColor: Constants.theme.primary,
            }}
            onPress={onSaveInfo}
          >
            <Text style={{ color: Constants.theme.dark, fontSize: 24 }}>
              Continue
            </Text>
          </Button>
        </Section>
      </LayoutScrollView>
    </BottomSheetModalProvider>
  );
};
