import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Layout } from "../../../components/Layout";
import { Button } from 'react-native-paper';

import { 
     DetailsWrapper,
     DetailsRow,
     ImageBackground,
     DetailsPrimary,
     ImageCancel,
     DetailsSecondary,
     DetailsTertiary,
     DetailsHover,
     ImageDetails,
     DetailsParagraph,
     DetailsLocation,
     DetailsCycle,
     DetailsAddress,
     DetailsDrop,
     DetailsType, 
     ImageBike,
     DetailsCopy,
     DetailsBtn
 } from '../components/details.styles';

export default function LogisticsDetails({ navigation }) {
    return(
    <SafeAreaView>
    <ScrollView>
      <Layout>
       <DetailsWrapper>
          <DetailsRow>
            <Button style={{
              left: 20,
            }} onPress={() => navigation.navigate("logisticBooking")}>
              <ImageBackground
                source={require("../../../../assets/backIcon.png")}
              />
           </Button>
          </DetailsRow>
          <DetailsRow>
             <DetailsPrimary>Confirm Details</DetailsPrimary>
          </DetailsRow>
          <DetailsRow>
            <ImageCancel source={require('../../../../assets/cancel.png')} />
          </DetailsRow>
       </DetailsWrapper>
       <DetailsSecondary>#oRDerNuMber</DetailsSecondary>
       <DetailsTertiary>Type of good</DetailsTertiary>
       <DetailsHover>
          <DetailsWrapper>
             <DetailsRow>
               <ImageDetails source={require('../../../../assets/group5.png')} />
             </DetailsRow>
             <DetailsRow>
                <DetailsParagraph>Food</DetailsParagraph>
             </DetailsRow>
          </DetailsWrapper>
       </DetailsHover>
       <DetailsLocation>PickUp Location</DetailsLocation>
       <DetailsCycle>
         <DetailsAddress>
            15 AP street, Federal Low-cost Housing
            Estate, Ikorodu
        </DetailsAddress>
       </DetailsCycle>
       <DetailsDrop>Drop-Off Location</DetailsDrop>
       <DetailsCycle>
       <DetailsAddress>
            15 AP street, Federal Low-cost Housing
            Estate, Ikorodu
        </DetailsAddress>
       </DetailsCycle>
       <DetailsType>Type of Vehicle</DetailsType>
       <DetailsHover>
         <DetailsWrapper>
          <DetailsRow>
            <ImageBike source={require('../../../../assets/details1.png')} />
          </DetailsRow>
          <DetailsRow>
            <DetailsCopy>Motorcycle</DetailsCopy>
          </DetailsRow>
         </DetailsWrapper>
       </DetailsHover>
       <DetailsBtn>confirm</DetailsBtn>
      </Layout>
      </ScrollView>
      </SafeAreaView>
    );
};