# SpotifyDesignClone
This is a clone of spotify app design


https://user-images.githubusercontent.com/24582758/213779434-19338ab5-0919-444e-9bc6-c1c05553a7b2.mov





## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 12 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://reactnative.dev/docs/environment-setup)
- for [iOS development](https://reactnative.dev/docs/environment-setup)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:


- clone repository and go to project folder
- `yarn install` to install the dependencies
- run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a debug key with:
  - `cd android/app`
  - `cd ../..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)
