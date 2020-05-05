import React, { Component } from "react";

class CategoryChips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: [],
    };
  }
  addChip = (val) => {
    var tempChips = this.state.chips;
    tempChips.push(val);
    this.setState({
      chips: tempChips,
    });
  };
  removeAllChips = () => {
    this.setState({
      chips: [],
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="root-chips row">
          {this.state.chips.length == 0 ? (
            <em>Nothing've been Added Yet!</em>
          ) : (
            this.state.chips.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  this.props.removeId(item.id);
                  var temArr = this.state.chips.filter((element) => {
                    return element.id != item.id;
                  });
                  this.setState({
                    chips: temArr,
                  });
                }}
              >
                {item.name}
              </div>
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryChips;
