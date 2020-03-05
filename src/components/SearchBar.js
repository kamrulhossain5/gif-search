import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h3 style={{ marginBottom: "20px" }}>Search</h3>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid action input">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search for Gifs"
              required
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
