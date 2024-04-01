# Config Patch for Expo Black Bar

This issue has been fixed with a config patch written by Kudo! **If it all works, the status bar will not render at all.**

To add this fix to your project

1. Create a `withAndroidDisplayCutout.js` file in your root directory and copy the code over from the file in this repo.

2. add the withAndroidDisplayCutout.js to your app.json:

`"plugins": [ "./withAndroidDisplayCutout" ]`


3. Ensure your StatusBar component props are as follows:

`<StatusBar hidden={true} translucent />`

4. run android prebuild using the following command:

`npx expo run:android`

This will run a prebuild, seperating the Android files into their own folder.

Following the steps above will add AndroidDisplayCutout to your native Android styles.xml file upon prebuild. 

A prebuild is necessary for this to work as it needs to build from the Android files only. **It will not work in Expo Go**
