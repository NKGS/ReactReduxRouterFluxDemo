import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as loginAction from '../../actions/login.action';

class Login extends Component {
    
    onClick = () => {
        //Home is th key used in routes while defining Scene
        this.props.dispatch(loginAction.changeState(true));  
        //Actions.Home();
    }

    render(){
        return (<View style={styles.body}>
            <Text style={styles.txtColor}>Welcome</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => this.onClick()}>
                <Text style={styles.txtColor}>Login</Text>
                </TouchableOpacity>
        </View>);
    }
}

function mapStateToProps(state){
    return state;
}


const styles = StyleSheet.create({
    body:{
      flex: 1,
      marginTop: 15,
      alignItems:'center',
      justifyContent: 'center',
    },
    txtColor:{
        color:'white',
        fontSize: 20
    },
    btnStyle:{
        backgroundColor:'black', 
        width:100,
        alignItems:'center',
        marginTop:10
    }
});

export default connect(mapStateToProps)(Login);

