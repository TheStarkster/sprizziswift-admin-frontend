import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.Name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };
  removeId = (id) => {
    var idArr = document.getElementById(this.props.id).value.split(",");
    const index = idArr.indexOf(id);
    if (index > -1) {
      idArr.splice(index, 1);
    }
    document.getElementById(this.props.id).value = idArr.join();
  };
  onClick = (e) => {
    var idArr =
      document.getElementById(this.props.id).value === ""
        ? []
        : document.getElementById(this.props.id).value.split(",");
    if (idArr.includes(e.target.id)) {
      alert("Already Added this Catagory");
    } else {
      idArr.push(e.target.id);
      document.getElementById(this.props.id).value = idArr.join();
      this.props.categoryChipHit({
        name: e.currentTarget.innerText,
        id: e.target.id,
      });
    }
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    });
  };
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        var fieldLength = document.getElementById("txtcategory").clientWidth;
        suggestionsListComponent = (
          <div className="row">
            <ul class="suggestions" style={{ width: fieldLength }}>
              {filteredSuggestions.map((suggestion, index) => {
                let className;
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }

                return (
                  <li
                    className={className}
                    key={suggestion.id}
                    id={suggestion.id}
                    onClick={onClick}
                  >
                    {suggestion.Name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else {
        var fieldLength = document.getElementById("txtcategory").clientWidth;
        suggestionsListComponent = (
          <div className="row justify-content-center">
            <ul class="suggestions" style={{ width: fieldLength }}>
              <li>
                <em>No suggestions</em>
              </li>
            </ul>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input type="hidden" id={this.props.id} />
        <input
          type="text"
          class="form-control d-xl-flex"
          id="txtcategory"
          placeholder={this.props.hint == null ? "Name" : this.props.hint}
          onChange={onChange}
          onKeyDown={onKeyDown}
          style={{
            marginTop: "17px",
            paddingLeft: "12px",
            Height: "38px",
            paddingBottom: "7px",
            width: "100%",
            paddingRight: "19px",
          }}
          value={userInput}
        />
        <div className="row">{suggestionsListComponent}</div>
      </Fragment>
    );
  }
}

export default Autocomplete;
