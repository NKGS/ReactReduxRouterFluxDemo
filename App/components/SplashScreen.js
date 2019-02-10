import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RNSplashScreen from 'react-native-splash-screen';

class SplashScreen extends Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.handleRootNavigation(nextProps);
    }

    handleRootNavigation = (nextProps) => {
        //alert(nextProps.isLoggedIn);
        RNSplashScreen.hide();
        if(nextProps.isLoggedIn){
            Actions.push('Home');
        }
        else{
            Actions.push('Login');
        }
    }
    componentDidMount(){
        this.handleRootNavigation(this.props);
    }

    render(){
        return (
            <View>
                <Image source={require("../images/splashimage.jpg")} style={{ flex: 1, height: undefined, width: undefined }} />
            </View>
        );
    }
}

function mapStateToProps(state){
    const { isLoggedIn } = state.common;
    return { isLoggedIn } ;
}

export default connect(mapStateToProps)(SplashScreen);