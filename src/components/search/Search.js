import { Component } from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder={props.placeHolder}
      onChange={props.onChangeHandler}
      value={props.value}
    />
  );
};

// class Search extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeHolder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default Search;
