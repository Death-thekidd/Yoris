import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ww = (a)=>windowWidth*a/428;
export const hh = (a)=>windowHeight*a/1024;
export const wp = (a)=>a/428*100;