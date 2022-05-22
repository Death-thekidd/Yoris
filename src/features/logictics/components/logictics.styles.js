import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { fonts } from '../../../infrastructure/theme/fonts';

export const Title = styled.Text`
  textAlign: center;
  justifyContent: space-between;
  alignItems: center;
  color: #8b9100;
  font-weight: bold;
  text-transform: uppercase;
`
export const CategoryView = styled.View`
display: flex 
  `
export const ItemView = styled.View`
 position:absolute;
 top: 25px;
  height: 54px;
 display: flex;
 justify-content: center;
background: #4d4100;
 border-radius: 15px;
 width: 100%;
 
`
export const ViewList = styled.TouchableOpacity`
margin-right: 30px;
justify-content: center;

`;
export const List = styled.FlatList`
padding: 18px;


`
export const LogicticsBacground = styled.View`
              flex: 1;
            ${'' /* display: flex;
            align-items: center;
            justify-content: center; */}
            background-color:black
  `

export const DeliveryImage = styled.Image`
position: absolute;
height: 20px;
width: 30px;
align-items:center;
top:15px;
left: 12px;
`
export const LogisticBtnCont = styled.View`
${'' /* position: absolute; */}
display:flex;
flex-flow:row;
color: #fff;
width: 340px;
height: 64px;
background:#9A8340;
border: 1px solid #C3AD60;
box-shadow:  4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`




export const LogisticBtnView = styled.View`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 60px 0;
  width: 100%;
  justify-content: center;

`
export const LogisticBtn = styled(Button).attrs(
  { color: colors.ui.primary, })`
      width: 180px;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
     
  `

export const ContinueButton = styled(Button).attrs(
  {
    color: colors.ui.primary

  },
)
  `font-weight:900;
    font-size:110px;
    margin-top:10px;
  
    box-shadow:  4px 4px 8px rgba(0, 0, 0, 0.25);
    `
export const ContinueView = styled.View`
    width: 330px;
    height: 64px;

    text-align:center;
    align-self:center
    background: #C3AD60;
    border: 1px solid #9A8340;
    border-radius: 10px;
    

  `