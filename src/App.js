// import logo from './logo.svg';
import React from "react";
import "./App.css";

function App() {
  // let items = [
  //   { name: "stroberry", price: "100" },
  //   { name: "apple", price: "150" },
  //   { name: "banana", price: "230" },
  // ];

  // return (
  //   <div className="App container mt-5">
  //     <table className="table table-striped">
  //       <tbody>
  //         {items.map((value) => (
  //           <tr>
  //             <th scope="row">{value.name}</th>
  //             <td>{value.price}yen</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return(
    <div className="container text-center mt-5">
      <Clock />
    </div>
  )
}

// componentの定義
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.now = new Date();
    this.time = ``;

    this.state = {
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    }

    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState((state) => ({
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    }));
  }

  render() {
    return <p onClick={this.refresh}>{this.state.time}</p>
  }  
}

export default App;
