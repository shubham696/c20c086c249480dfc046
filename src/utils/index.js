import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
const guildeLineWidth = 480;
const guildeLineHeight = 320;


export const setWidth = (size) => (width/guildeLineWidth)*size;
export const setHeight = (size) => (height/guildeLineHeight)*size;
export const setFontScale = (size) => {
    const ratio = size/width;
    const newValue = guildeLineWidth * ratio;
    return newValue;
}

