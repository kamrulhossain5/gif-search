import React from "react";
import giphyTrending from "../apis/giphyTrending";
import giphySearch from "../apis/giphySearch";
import SearchBar from "./SearchBar";
import GiphyList from "./GiphyList";
import Trending from "./Trending";

class App extends React.Component {
  state = { gifs: [], term: "" };

  onTrendingSubmit = async () => {
    const response = await giphyTrending.get("/v1/gifs/trending");
    this.setState({ gifsTrending: response.data.data });
  };

  onTermSubmit = async term => {
    const response = await giphySearch.get("/v1/gifs/search", {
      params: { q: term }
    });
    this.setState({ gifs: response.data.data, term: term });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <h1 style={{ marginBottom: "30px" }}>Gif Search</h1>
        <Trending />
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <GiphyList gifs={this.state.gifs} term={this.state.term} />
      </div>
    );
  }
}

export default App;
