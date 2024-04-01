import React from "react";
import { Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Text style={styles.paragraph}>
        This issue has been fixed with a config written by Kudo!
      </Text>
      <Text style={styles.paragraph}>To add this fix to your project,</Text>
      <Text style={styles.blue}>
        1. Create a `withAndroidDisplayCutout.js` file in your root directory
        and copy the code over from the one in this project.
      </Text>
      <Text style={styles.blue}>
        2. add `"plugins": [ "./withAndroidDisplayCutout" ]` to your app.js
      </Text>
      <Text style={styles.blue}>
        3. Ensure your StatusBar `hidden` and `translucent` props are set to
        `true`.
      </Text>
      <Text style={styles.blue}>4. run `npx expo run:android`</Text>
      <Text style={styles.paragraph}>
        Following the steps above will add AndroidDisplayCutout to your native
        Android styles.xml file upon prebuild. A prebuild is necessary for this
        to work as it needs to build from the Android files only.{" "}
      </Text>
      <Text style={styles.paragraph}>
        If it all works, the status bar will not render at all.
      </Text>

      <Text style={styles.paragraph}>Thank you Kudo!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 30,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  blue: {
    color: "blue",
    margin: 10,
    fontSize: 18,
  },
});
