import React, { Component } from "react";
import SHOP_DATA from "./CollectionData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectioProps }) => (
          <PreviewCollection key={id} {...otherCollectioProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
