import React from "react";

import { StatusBar, Platform, View } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const StatusBarContainer = styled.View`
  display: absolute;
  flex-direction: row;
  layout-direction: rtl;
  margin: 5px 0px 5px 0px;
`;

//StatusBarTime -------------------------------------------
const IOSStatusBarTime = styled.Text`
  flex: 1;
  flex-direction: column;
  font-weight: 500;
  font-size: 15px;
  margin: 12px 0px 0px 25px;
  align-items: flex-end;
  align-self: flex-end;
`;
const ANDStatusBarTime = styled.Text`
  flex: 1;
  font-size: 12px;
  font-weight: 400;
  padding: 6px 2px 8px 28px;
`;

//Signal4GBattery ------------------------------------------
const IOSSignal4gBattery = styled.Image`
  flex: 0.2;
  height: 12px;
  width: 80px;
  margin: 0px;
  resize-mode: contain;
  position: absolute;
  right: 6px;
  bottom: 1px;
`;
const ANDSignal4gBattery = styled.Image`
  flex: 0.2;
  height: 13px;
  width: 70px;
  margin: 2px;
  resize-mode: contain;
  align-items: center;
  align-self: center;
  position: absolute;
  right: 10px;
`;

export default function CustomStatusBar() {
  if (isAndroid) {
    console.log("android");

    return (
      <View>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <StatusBarContainer>
          <ANDStatusBarTime>04:08</ANDStatusBarTime>
          <ANDSignal4gBattery
            source={require("../assets/icons/black/signalwifibattery.png")}
          />
        </StatusBarContainer>
      </View>
    );
  } else {
    console.log("iOS");
    StatusBar.setHidden(true);
    return (
      <StatusBarContainer>
        <IOSStatusBarTime>04:08</IOSStatusBarTime>
        <IOSSignal4gBattery
          source={require("../assets/icons/black/signal4gbattery.png")}
        />
      </StatusBarContainer>
    );
  }
}
