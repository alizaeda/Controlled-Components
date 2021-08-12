import React from "react";
import PropTypes from "prop-types";

const DeleteItem = (props) => {
  const { items, disable } = props;
  return (
    <div>
      <button disabled={disable} onClick={items}>
        Delete Last Item
      </button>
    </div>
  );
};

DeleteItem.propTypes = {
  items: PropTypes.func.isRequired,
  disabled: PropTypes.func,
};

export default DeleteItem;
