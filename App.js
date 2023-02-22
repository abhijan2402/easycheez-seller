/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Orders from './src/screens/home/Orders';
import AddProduct from './src/screens/Products/AddProduct';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  return (
    <>
      {/* <AddProduct /> */}
      <Orders/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
