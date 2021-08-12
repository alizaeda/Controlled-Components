import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  const { index, item } = props;
  return <li key={index}>{item}</li>;
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default Item;
