import {StyleSheet} from 'react-native';
import * as Colors from "../../utils/colors";
import * as Utils from "../../utils/index";


export default styles = StyleSheet.create({
    parentView:{
        flex:1, 
        marginHorizontal: Utils.setWidth(20),
        marginVertical: Utils.setHeight(20)
    },
    cityDetailsView: {
        borderColor:Colors.black, 
        borderWidth: 2, 
        paddingHorizontal: Utils.setWidth(10),
        paddingVertical: Utils.setHeight(10),
        marginBottom: Utils.setHeight(20)
    },
    infoTextStyle: {
        fontSize: Utils.setFontScale(18), 
        fontWeight: 'bold',
        paddingBottom: Utils.setHeight(3)
    },
    buttonStyle: {
        backgroundColor: Colors.navyBlue,
        width: Utils.setWidth(150),
        height: Utils.setHeight(20),
        borderRadius: Utils.setWidth(50),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end'
    },
    buttonTextStyle: {
        color: Colors.white,
        alignSelf:'center'
    },
    loaderView: {
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle: {
        fontSize: Utils.setFontScale(24), 
        fontWeight: 'bold',
    },
    weatherIconView: {
        flexDirection: 'row'
    },
    weatherIconStyle: {
        marginStart:Utils.setWidth(20), 
        width: Utils.setWidth(40), 
        height: Utils.setHeight(10)
    }
})