import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import { homeProps } from "../../type";
import styles from "./styles";

interface homeStates {
    country_name: String,
    country_detatils: Array<JSON>,
    error: String,
    loading: boolean
}
class Home extends Component<homeProps, homeStates> {
    constructor(props: homeProps){
        super(props);
        this.state={
            country_name:'',
            country_detatils: [],
            error: '',
            loading: false
        }
    }

    showAlert = () => {
        alert("Please Enter valid Country Name")
    }

    getApiDetails = (): void => {
        if(this.state.country_name.length == 0){
            this.showAlert()
        }else{
            this.setState({loading: true})
            fetch(`https://restcountries.eu/rest/v2/name/${this.state.country_name}`,{
                method:'GET'
            }).then((res)=>res.json())
            .then((response)=>{
                this.setState({loading: false})
                if(response.message == 'Not Found'){
                    this.showAlert()
                }else{
                    this.setState({country_detatils:response})
                    this.navigateToDetailsScreen()
                }
            })
            .catch((err)=>{
                this.setState({loading: false})
                this.setState({error: err.message})
                this.showAlert()
            })
        }
    }

    navigateToDetailsScreen = (): void => {
        const {navigation} = this.props;
        navigation.navigate('CityDetails',{country_name: this.state.country_name, country_detatils: this.state.country_detatils})
    }

    render(){
        return(
            <View style={styles.parentView}>
                <TextInput
                    style={[styles.textInputStyle, this.state.country_name.length > 0 ? styles.activeColorFotTextInput: styles.inActiveColorFotTextInput]}
                    onChangeText={(txt)=>this.setState({country_name: txt})}
                    placeholder="Enter country"
                />
                <TouchableOpacity onPress={this.getApiDetails} style={[styles.buttonStyle, this.state.country_name.length > 0 ? styles.buttonEnableColor : styles.buttonDisableColor]} >
                    <Text style={styles.buttonTextStyle}>
                        Submit
                    </Text>
                </TouchableOpacity>
                {this.state.loading && <View style={styles.loaderView}>
                    <ActivityIndicator size='large' color='#000'/>
                </View>}
            </View>
        )
    }
}

export default Home;