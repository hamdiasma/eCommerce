import React from "react";

import MenueItem from "../menue-item/MenueItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directori.selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSrctionProps }) => (
        <MenueItem key={id} {...otherSrctionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySection(state),
  };
};
export default connect(mapStateToProps)(Directory);
