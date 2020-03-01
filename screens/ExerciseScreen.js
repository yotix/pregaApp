import * as React from 'react';
import { Slider, Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { PregaConsumer } from '../store';
import Button from '../components/Button';

export default class ExerciseScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      valueText:[
          'I don\'t exercise at all',
          'I exercise rarely',
          'I exercise often',
          'I exercise sometimes',
          'I exercise regularly',
          'I never miss exercise'
      ]
    }
  }

  slider_bound=(event)=>{
    var {x, y, width, height} = event.nativeEvent.layout;
    this.state.slider_Width=width;
    this.state.slider_Height=height;
    this.state.slider_x = x;
    this.state.slider_y = y;
    this.state.slider_x_step_size = width/5; //Devide the width by slider maximum value
    this.setState({triger:''});
    
    }

  render() {
    const { navigation } = this.props;
    return (
        <PregaConsumer>
            {
                (context) => (
                    <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.subHeading}>
                        To get your perfect workouts, tell
                        us your activity level
                        </Text>
                        <Image
                        source={require('../assets/clouds.png')}
                        style={styles.welcomeImage}
                        />
                        <Slider
                        style={styles.slider}
                        maximumValue={5}
                        minimumValue={0}
                        value={context.getActivityLevel()}
                        onValueChange={context.setActivityLevel}
                        thumbImage={require('../assets/slider.png')}
                        onLayout={(event)=>{this.slider_bound(event)}}
                        maximumTrackTintColor={'#a8dad8'}
                        minimumTrackTintColor={'#a8dad0'}
                        step={1}
                        />
                        <Text style={{
                            position:'relative',
                            fontSize: 18,
                            bottom:context.getPosition(),
                            left:'48%'}}
                            >
                        {context.getActivityLevel()}
                        </Text>
                    </View>
                    <Text
                    style={styles.valueText}>
                        {this.state.valueText[context.getActivityLevel()]}
                    </Text>
                    <Button
                    onPress={() => navigation.navigate('Result')}
                    text={'Continue'}
                    >
                    </Button>
                </View>
        )}
        </PregaConsumer>
  );
}
}

ExerciseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  welcomeImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'center',
    position:'absolute',
    marginTop:'45%'
  },
  form: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    flex:1,
    justifyContent:"space-between"
  },
  subHeading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  submit: {
    height: 80,
    opacity: 1,
    backgroundColor: '#a8dad8',
  },
  valueText:{
    fontSize:20,
    marginTop:20,
    textAlign:'center',
    // justifyContent:"flex-end",
    marginBottom: 30
  },
  submitText: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    justifyContent:'center'
  },
  slider: {
      position: 'relative',
      transform: [{
          rotate: '-90deg'
      }],
      borderRadius:10,
      height:20
    }
});
