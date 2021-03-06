import * as React from 'react';
import { Platform, ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useLinking from './navigation/useLinking';
import HomeScreen from './screens/HomeScreen';
import DueEstimateScreen from './screens/DueEstimateScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import { PregaProvider, PregaConsumer } from './store';
import ResultScreen from './screens/ResultScreen';
const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <PregaProvider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
              headerShown:false
            }}/>
            <Stack.Screen name="DueDate" component={DueEstimateScreen} options={{
              headerBackTitle: 'Select goals',
              headerShown:true
            }} />
            <Stack.Screen name="Exercise" component={ExerciseScreen} options={{
              headerBackTitle: 'Due date',
              headerShown:true
            }} />
            <Stack.Screen name="Result" component={ResultScreen} options={{
              headerBackTitle: 'Exercise',
              headerShown:false
            }} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      </PregaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
