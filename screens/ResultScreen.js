import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { PregaConsumer } from '../store';
import Button from '../components/Button';

class ResultScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <PregaConsumer>
        {
          (context) => (
            <View style={styles.container}>
              <Text style={styles.heading}>
                Results:
              </Text>
              <Text style={styles.subHeading}>
                Primary Goal: {context.state.goal}
              </Text>
              <Text style={styles.subHeading}>
                Due Date: {context.state.dueDate.toString()}
              </Text>
              <Text style={styles.subHeading}>
                Exercise Level: {context.state.exerciseLevel}
              </Text>
              <Button
                onPress={() => {navigation.navigate('Home')}}
                text={'Start Over Again!!'}>
                </Button>
            </View>
          )}
      </PregaConsumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40
  },
  heading: {
    fontSize: 30,
    textAlign:'center',
    fontWeight: '400',
    marginTop: 10
  },
  subHeading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    height: 80,
    backgroundColor: '#a8dad8',
  },
  buttonText:{
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    justifyContent:'center'
  }
});

export default ResultScreen;