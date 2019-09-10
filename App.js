import React, { Component } from "react";
import { View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "./navigation/AppContainer";
import  thunk  from "redux-thunk";
import reducer from "./reducer";
class App extends Component {
  render() {
    const store = createStore(reducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
