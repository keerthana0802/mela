import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import ImagesExample from "./components/image_example.js";
import ALine from "./components/a-line.js";
import Anarkali from "./components/anarkali.js";
import Angrakha from "./components/angrakha.js";
import LongStraight from "./components/long-straight.js";
import Arrow from "./components/arrow.js";
import XMLData from "./xmldata/list.xml";

const App = () => {
  return (
    <React.Fragment>
      <ImagesExample />
      <Text StyleSheet={StyleSheet.baseText}>Shop by Pattern</Text>
      <ALine /> <Text StyleSheet={StyleSheet.baseText}>A-Line</Text>
      <ALine />
      <Text StyleSheet={StyleSheet.baseText}>Anarkali</Text>
      <ALine />
      <Text StyleSheet={StyleSheet.baseText}>Angrakha</Text>
      <ALine />
      <Text StyleSheet={StyleSheet.baseText}>Long Straight</Text>
    </React.Fragment>
  );
};

export default App;
