import React, { useState } from 'react';
import { 
   RiderBackground,
   RiderPrimary, 
   RiderWrap,
   RiderBtn, 
   RiderSpecify,
   RiderSubmit
} from './riderOrder.styles';
import { NativeBaseProvider, Input } from 'native-base';

export default function RiderOrder({navigation}) {
    const [text, setText] = useState("");
    return (
      <NativeBaseProvider>
        <RiderBackground>
          <RiderPrimary>Please state reason</RiderPrimary>
          <RiderWrap>
            <RiderBtn>Client not available</RiderBtn>
            <RiderBtn>Rejected order</RiderBtn>
          </RiderWrap>
          <RiderSpecify>
             <Input 
               type={text} 
               variant="underlined"
               placeholder={"Other (Specify)"}
               placeholderTextColor={"#fff"}
             />
          </RiderSpecify>
          <RiderSubmit>Submit</RiderSubmit>
        </RiderBackground>
        </NativeBaseProvider>
    );
};