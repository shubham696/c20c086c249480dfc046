import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { cityScreenProps } from "../../type";
import styles from "./styles";

interface cityStates {
    country_detatils: Array<JSON>,
    loading: boolean,
    capitalWatherDetails: string,
    error: String
}
class CityDetails extends Component<cityScreenProps, cityStates> {
    constructor(props: cityScreenProps) {
        super(props);
        this.state = {
            country_detatils: props.route.params.country_detatils,
            loading: false,
            capitalWatherDetails: '',
            error: ''
        }
    }

    getWeather = (): void => {
        if (this.state.country_detatils[0].capital.length > 0) {
            this.setState({ loading: true })
            fetch(`http://api.weatherstack.com/current?access_key=9440d6f99ba9b9af02e6384ba5a7dcef&query=${this.state.country_detatils[0].capital}`, {
                method: 'GET'
            }).then((res) => res.json())
                .then((response) => {
                    this.setState({ loading: false })
                    if (response.success == false) {
                        this.setState({ error: "Not Found" })
                    } else {
                        this.setState({ capitalWatherDetails: JSON.stringify(response.current) })
                    }
                })
                .catch((err) => {
                    this.setState({ loading: false })
                    this.setState({ error: "Not Found" })
                })
        }
    }

    render() {
        return (
            <ScrollView style={styles.parentView}>
                <Text style={[styles.titleStyle]}  numberOfLines={1} ellipsizeMode='tail' >{this.props.route.params.country_name} Details</Text>
                {JSON.stringify(this.state.country_detatils[0]).length > 0 ?  <View style={styles.cityDetailsView}>
                    <Text style={styles.infoTextStyle} numberOfLines={2} ellipsizeMode='tail'>capital : {this.state.country_detatils[0].capita ? this.state.country_detatils[0].capital : 'Not Avilable'}</Text>
                    <Text style={styles.infoTextStyle}>population : {this.state.country_detatils[0].population ? this.state.country_detatils[0].population : 'Not Avilable'}</Text>
                    <Text style={styles.infoTextStyle}>latlng : {this.state.country_detatils[0].latlng ? this.state.country_detatils[0].latlng : 'Not Avilable'}</Text>
                    {this.state.country_detatils[0].flag && <View style={styles.weatherIconView}>
                        <Text style={styles.infoTextStyle}>flag: </Text>
                        <Image source={{ uri: this.state.country_detatils[0].flag }} style={styles.weatherIconStyle} resizeMode='contain' />
                    </View>}
                </View>
                :
                <View>
                    <Text style={styles.infoTextStyle}>Please Come back later to Check weather, server is upgrading</Text>
                </View>
                }
                {this.state.error.length == 0 ?
                    [this.state.capitalWatherDetails.length == 0 ? <View style={{ flex: 0.5 }}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this.getWeather}>
                            <Text style={styles.buttonTextStyle}> Capital Weather{' '}</Text>
                        </TouchableOpacity>
                    </View>
                        :
                        <View>
                            <View style={styles.weatherIconView}>
                                <Text style={styles.titleStyle} numberOfLines={1} ellipsizeMode='tail' >{this.state.country_detatils[0].capital} Weather</Text>
                                <Image source={{ uri: JSON.parse(this.state.capitalWatherDetails).weather_icons[0] }} style={styles.weatherIconStyle} resizeMode='contain' />
                            </View>
                            <View style={styles.cityDetailsView}>
                                <Text style={styles.infoTextStyle}>temperature : {JSON.parse(this.state.capitalWatherDetails).temperature ? JSON.parse(this.state.capitalWatherDetails).temperature : 'Not available'}</Text>
                                <Text style={styles.infoTextStyle}>wind_speed : {JSON.parse(this.state.capitalWatherDetails).wind_speed ? JSON.parse(this.state.capitalWatherDetails).wind_speed : 'Not available'}</Text>
                                <Text style={styles.infoTextStyle}>precip : {JSON.parse(this.state.capitalWatherDetails).precip  ? JSON.parse(this.state.capitalWatherDetails).precip : 'Not available'}</Text>
                                {JSON.parse(this.state.capitalWatherDetails).weather_icons[0] && <View style={styles.weatherIconView}>
                                    <Text style={styles.infoTextStyle}>weather icon: </Text>
                                    <Image source={{ uri: JSON.parse(this.state.capitalWatherDetails).weather_icons[0] }} style={styles.weatherIconStyle} resizeMode='contain' />
                                </View>}
                            </View>
                        </View>
                    ]
                    :
                    <View>
                        <Text style={styles.infoTextStyle}>Please Come back later to Check weather, server is upgrading</Text>
                    </View>
                }
                {this.state.loading && <View style={styles.loaderView}>
                    <ActivityIndicator size='large' color='#000' />
                </View>}
            </ScrollView>
        )
    }
}

export default CityDetails;