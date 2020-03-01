import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Button (props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.submit}>
              <Text style={styles.submitText}>
              {props.text}
              </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submit: {
        height: 80,
        opacity: 1,
        backgroundColor: '#a8dad8'
    },
    submitText: {
        fontSize: 24,
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
        justifyContent:'center'
    }
});

export default Button;