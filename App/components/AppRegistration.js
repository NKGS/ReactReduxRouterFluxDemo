import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import SplashScreen from './SplashScreen';

class AppRegistration extends Component {
    constructor(props){
        super(props);
        this.state = {
            isStorageLoaded: false
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.storeageAwareReducer.loaded){
            this.setState({ isStorageLoaded : true });
        }
    }

    render(){
        return (
            <View>
                <SplashScreen {...this.props} />
            </View>
        );
    }
}

function mapStateToProps(state){
    const { isLoggedIn } = state.common;
    const { storeageAwareReducer } = state;
    return { isLoggedIn , storeageAwareReducer} ;
}

export default connect(mapStateToProps)(AppRegistration);