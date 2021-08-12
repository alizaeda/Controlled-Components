import React, { Component } from "react";
import ItemsList from "./ItemList";
import DeleteItem from "./DeleteItem";

class InputForm extends Component {
  state = {
    value: "",
    items: [],
  };
  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    // const items = this.state.items;
    // items.push(this.state.value);
    this.setState((currState) => ({
      items: [...currState.items, this.state.value],
      value: "",
    }));
  };
  inputEmpty() {
    return this.state.value === "";
  }
  deleteLastItem = () => {
    this.setState({ items: this.state.items.slice(0, -1) });
  };
  emptyDeleteInput = () => {
    return this.state.items.length === 0;
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search Here .."
            value={this.state.value}
            onChange={this.onChangeHandler}
          />
          <button disabled={this.inputEmpty()}>Add Item</button>
        </form>
        <DeleteItem
          disable={this.emptyDeleteInput()}
          items={this.deleteLastItem}
        />
        <ItemsList items={this.state.items} /* value={this.state.value} */ />
      </div>
    );
  }
}

export default InputForm;
