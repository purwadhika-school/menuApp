import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import axios from "axios";

const BASE_URL = "https://ace.tokopedia.com";

class Products extends Component {
  constructor(props) {
    //1
    super(props);

    this.state = {
      data_products: []
    };
  }

  componentDidMount() {
    //3
    this._getDataProductFromApi();
  }

  _getDataProductFromApi = () => {
    //4
    const API_URL = `${BASE_URL}/search/v2.6/product?shop_id=345986&ob=9&rows=80&start=0&full_domain=www.tokopedia.com&scheme=https&device=desktop&source=shop_product`;
    axios
      .get(API_URL)
      .then(res => {
        const dataProducts = res.data.data;
        this.setState({ data_products: dataProducts });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  _renderProducts = products => {
    console.log(products);
    return (
      <View
        style={{
          borderColor: "#66594a",
          borderWidth: 1,
          borderRadius: 5,
          width: "45%",
          marginTop: 10,
          marginLeft: 5,
          marginRight: 5
        }}
      >
        <Image
          source={{ uri: products.item.image_uri }}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        />
        <Text>{products.item.name}</Text>
        <Text>{products.item.price}</Text>
        <Text>
          by {products.item.shop.name} {products.item.shop.city}
        </Text>
        <Image
          source={{ uri: products.item.shop.reputation_image_uri }}
          style={{ width: 100, height: 20, resizeMode: "contain" }}
        />
      </View>
    );
  };

  render() {
    //2 5
    return (
      <View>
        {this.state.data_products.length > 0 && (
          <FlatList
            data={this.state.data_products}
            keyExtractor={(item, id) => item.id}
            renderItem={this._renderProducts}
            numColumns={2}
          />
        )}
      </View>
    );
  }
}

export default Products;
