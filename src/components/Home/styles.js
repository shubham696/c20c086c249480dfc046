import {StyleSheet} from 'react-native';
import * as Colors from "../../utils/colors";
import * as Utils from "../../utils/index";


export default styles = StyleSheet.create({
    parentView:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    },
    activeColorFotTextInput: {
        borderColor: Colors.navyBlue,
    },
    inActiveColorFotTextInput: {
        borderColor: Colors.black,
    },
    textInputStyle: {
        width: '80%',
        height: Utils.setHeight(20),
        borderRadius: Utils.setWidth(50),
        borderWidth:1,
        paddingHorizontal: Utils.setWidth(20),
        marginBottom: Utils.setHeight(20),
        fontSize:Utils.setFontScale(15)
    },
    buttonDisableColor: {
        backgroundColor: Colors.gray
    },
    buttonEnableColor: {
        backgroundColor: Colors.navyBlue
    },
    buttonStyle: {
        width: '40%',
        height: Utils.setHeight(20),
        borderRadius: Utils.setWidth(50),
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTextStyle: {
        color: Colors.white,
        alignSelf:'center'
    },
    loaderView: {
        justifyContent:'center',
        alignItems:'center'
    }
})