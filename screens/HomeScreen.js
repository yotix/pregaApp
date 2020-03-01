import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View ,Switch, CheckBox, TouchableOpacity} from 'react-native';
import RadioButton from '../components/RadioButtons';
import { PregaContext } from '../store';
import Button from '../components/Button';
import Goals from '../constants/Goals';

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <PregaContext.Consumer>
        {
          (context) => (
            
            <ImageBackground
            source={
              require('../assets/background_image.png')            }
              style={styles.welcomeImage}
              >
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.heading}>
              What are your goals ?
            </Text>
            <Text style={styles.subHeading}>
              Help us tailor our program to your needs.
            </Text>
            <RadioButton value={context.state.goal} onChange={context.setGoal} options={Goals} />
            {context.state.goal?
            <Button
            onPress={() => navigation.navigate('DueDate')}
            text={'Continue'}
            >
            </Button>
            :
            <TouchableOpacity
            style={styles.disableSubmit}>
              <Text style={styles.submitText}>
              Continue
              </Text>
              </TouchableOpacity>
            }
            </View>
        </View>
      </ImageBackground>
          )
        }
            </PregaContext.Consumer>
  );
}
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  form: {
    backgroundColor: 'rgba(255,255,255,0.9)',
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
    marginBottom: 30
  },
  submit: {
    height: 80,
    opacity: 1,
    backgroundColor: '#a8dad8'
  },
  disableSubmit:{
    height:80,
    backgroundColor: '#d8d8d8'
  },
  submitText: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    justifyContent:'center'
  }
});
