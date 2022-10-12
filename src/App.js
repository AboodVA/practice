import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";
import Search from "./components/search/Search";
import { useEffect, useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rendered");

  useEffect(() => {
    const fetchMonsters = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await res.json();

      setMonsters(jsonData);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const filteredList = monsters.filter((monster) =>
      String(monster.name).toLowerCase().includes(searchText.trim())
    );

    setFilteredMonsters(filteredList);
  }, [searchText, monsters]);

  const searchChangeHandler = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1>Moster Rodeo</h1>

      <Search
        value={searchText}
        className={"monster-search"}
        onChangeHandler={searchChangeHandler}
        placeHolder={"Search Monsters"}
      />

      <Card monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchText: "",
//     };

//     this.searchChangeHandler = this.searchChangeHandler.bind(this);
//   }

//   componentDidMount() {
//     const fetchMonsters = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const jsonData = await res.json();

//       this.setState(
//         () => {
//           return { monsters: jsonData };
//         },
//         () => {}
//       );
//     };

//     fetchMonsters();
//   }

//   searchChangeHandler(e) {
//     this.setState(() => {
//       return { searchText: e.target.value.toLowerCase() };
//     });
//   }

//   render() {
//     const { monsters, searchText } = this.state;
//     const { searchChangeHandler } = this;

//     return (
//     );
//   }
// }

export default App;
