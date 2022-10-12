import { Component } from "react";

const Monster = (props) => {
  const { src, alt, name, email } = props;

  return (
    <div className="card-container">
      <img src={src} alt={alt} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Monster extends Component {
//   render() {
//     const { src, alt, name, email } = this.props;

//     return (
//       <div className="card-container">
//         <img src={src} alt={alt} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Monster;
