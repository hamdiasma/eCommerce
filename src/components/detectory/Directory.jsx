import React, { Component } from "react";
import { data } from "./data";
import MenueItem from "../menue-item/MenueItem";
import "./Directory.scss";
class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: data,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, size, id }) => (
          <MenueItem key={id} imageUrl={imageUrl} size={size} title={title} />
        ))}
      </div>
    );
  }
}
export default Directory;
