import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  async onSearchBarSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID 8Z4U1RUV2npdNZOhtXc-xKtBr3JFgcWW37I7dW32I8U",
      },
    });

    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        Found {this.state.images.length} result images.
      </div>
    );
  }
}

export default App;
