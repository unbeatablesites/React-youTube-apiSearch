import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = term => {};

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
//AIzaSyDbNLw7dGuYZp7rAKWlwEOgSxVmw6geWS0
export default App;
