import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const API_URL =
  "https://ace.tokopedia.com/search/v2.6/product?shop_id=345986&ob=9&rows=80&start=0&full_domain=www.tokopedia.com&scheme=https&device=desktop&source=shop_product";

export default class App extends Component {
  render() {
    return <View style={styles.container} />;
  }
}
