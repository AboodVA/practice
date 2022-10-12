import { Component } from "react";
import "./Card.css";
import Monster from "../monster/Monster";

const Card = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, i) => {
        const { name, email } = monster;
        return (
          <Monster
            key={i}
            src={`https://robohash.org/${i}?set=set2&size=180x180`}
            name={name}
            email={email}
          />
        );
      })}
    </div>
  );
};

// class Card extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     console.log("render from Card");
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster, i) => {
//           const { name, email } = monster;

//           return (
//             <Monster
//               key={i}
//               src={`https://robohash.org/${i}?set=set2&size=180x180`}
//               name={name}
//               email={email}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default Card;
