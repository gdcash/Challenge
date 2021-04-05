import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./Redux";
import getDigitalService from "./service/digitalServices";

const App = () => {
  getDigitalService().then((res) => console.log(res));
  return <Provider store={store}> </Provider>;
};

export default App;
