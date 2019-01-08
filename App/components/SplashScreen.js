import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

class SplashScreen extends Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.handleRootNavigation(nextProps);
    }

    handleRootNavigation = (nextProps) => {
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
                <Text style={{color:'red'}}>Welcome</Text>
                </View>
        );
    }
}

function mapStateToProps(state){
    const { isLoggedIn } = state.common;
    return { isLoggedIn } ;
}

export default connect(mapStateToProps)(SplashScreen);