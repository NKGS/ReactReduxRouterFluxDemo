import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as loginAction from '../../actions/login.action';
import { connect } from 'react-redux';

class Home extends Component {
    logout = () => {
        this.props.dispatch(loginAction.changeState(false));
    }
    render(){
        return (<View style={styles.body}>
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => this.logout()}>
                    <Text style={styles.txtColor}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.txtView}>
            <Text style={styles.txtColor}>Welcome at Home</Text>
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      marginTop: 20, 
    },
    txtColor:{
        color:'white',
        fontSize: 20,
        
    },
    btnView:{
        flex: 0.1,
        alignItems:'flex-end'
    },
    txtView:{
        flex: 0.9,
        alignItems:'center',
        justifyContent: 'center',
    }
});

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Home);