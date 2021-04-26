// *** TEST INSTRUCTIONS ***
// Create the page shown of digital service groups and a list of items that is changed whenever a digital service group is tapped.
// The list items do not need to be tappable for this exercise.
// Use the build in digital services "API" to fetch the required information to build the page.
// Within the API response you can find the images for each icon, as well as all of the properties/labels necessary to complete the page.
// Ask questions as necessary and feel free to look up things on Google.
// Don't worry about perfect styling or finishing the entire exercise before time expires.
import React, { useState, useEffect } from "react";
import digitalServices from "./service/digitalServices";

// DOCS: https://reactnative.dev/docs/components-and-apis
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";

const App = () => {
  useEffect(() => {
    digitalServices().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <View>
      <Text>Hola Cash</Text>
    </View>
  );
};

export default App;
