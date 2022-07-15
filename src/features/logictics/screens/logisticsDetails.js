import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { LayoutScrollView } from '../../../components/Layout';
import { 
     DetailsWrapper,
     DetailsRow,
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
 import Header from '../../../components/Header';

export default function LogisticsDetails() {
  const { goBack, navigate } = useNavigation();
    return(
     <LayoutScrollView>
       <DetailsWrapper>
        <DetailsRow>
          <Header
              iconLeft={require("../../../../assets/backIcon.png")}
              onLeftIconPress={() => goBack()}
              onRightIconPress={() => navigate("logisticsMain")}
            />
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
      </LayoutScrollView>
    );
}