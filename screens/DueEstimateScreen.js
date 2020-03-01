import * as React from 'react';
import { DatePickerAndroid, DatePickerIOS, ImageBackground, Platform, StyleSheet, Text, View ,Switch, CheckBox, TouchableOpacity} from 'react-native';
import { PregaConsumer } from '../store';
import Button from '../components/Button';

export default class DueEstimateScreen extends React.Component {

  constructor(props){
    super(props);
  }

  async openAndroidDatePicker(options) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        options
      });
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    const currentDate = new Date();
    const { navigation } = this.props;
    return (
    <PregaConsumer>
        {
        (context) => (
            <ImageBackground
                source={
                require('../assets/background_image.png')}
                style={styles.welcomeImage}
                    >
                    <View style={styles.container}>
                    <View style={styles.form}>

                        <Text style={styles.heading}>
                        Select your estimated due date
                        </Text>
                        { Platform.OS === 'ios' ?
                        <DatePickerIOS
                        date={context.state.dueDate}
                        mode={'date'}
                        minimumDate={new Date()}
                        onDateChange={context.setDueDate}
                        maximumDate={new Date(currentDate.setMonth(currentDate.getMonth()+9))}
                        />
                        :
                        <TouchableOpacity
                        onPress={() => this.openAndroidDatePicker({
                            date:context.state.dueDate,
                            mode:'date',
                            minimumDate:new Date(),
                            onDateChange:context.setDueDate,
                            maximumDate:new Date(currentDate.setMonth(currentDate.getMonth()+9)) 
                        })}
                        style={styles.submit}>
                        <Text style={styles.submitText}>
                        Set Date
                        </Text>
                        </TouchableOpacity>
                        }
                        <Button
                        onPress={() => navigation.navigate('Exercise')}
                        text={'Continue'}>
                        </Button>
                        </View>
                    </View>
                </ImageBackground>
        )}
    </PregaConsumer>
  );
}
}

DueEstimateScreen.navigationOptions = {
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
  submitText: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    justifyContent:'center'
  }
});
