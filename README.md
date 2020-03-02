# React Native Prega Application

## Getting started

1. Install React Native as described at [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository
3. Run `yarn install` , all required components will be installed automatically
4. It is recommended to run `react-native start` || `yarn start` command from root project directory to run the project.
5. To separate into iOS and Android project run `yarn eject`.

    ### iOS
      
    1. Run `pod install` from `react-native-demo/ios` folder
    2. Start XCode and open generated `pregaApp.xcworkspace`
        
    ### Android
    
    no steps required
        
* Run your project from XCode (`Cmd+R`) for iOS, or use `react-native run-android` to run your project on Android.

## Project dependencies

The project uses the following third-party dependencies:
- "react-navigation" - to implement routing

These are not the dependencies for our react native sdk, but only for the project. 
Please note that we use these dependencies just to simplify our project and to provide the ability to try full functionality of our sdk. Integration of these dependencies to the demo project does not mean that you have to use these dependencies in your project.

## Useful links
Official guides:
- [Using React Native SDK guide](https://voximplant.com/blog/using-react-native-sdk)
- [Migration guide](https://voximplant.com/blog/migration-guide-for-react-native-sdk)
