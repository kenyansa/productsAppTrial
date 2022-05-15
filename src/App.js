import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

function ProductCategoryRow({category}){
  return (
    <tr>
      <td>{category}</td>
    </tr>
  )
}

function ProductRow(price, stocked, name){
  return (
    <tr>
      <td style={{color:  stocked ? "black" : "red" }}>{name}</td>
      <td>{price}</td>
      <td>{name}</td>
    </tr>
  );
}

function ProductTable(){
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow category="Sporting Goods" />
        <ProductRow name="Football" stocked={true} prie={49.99} />
        <ProductRow name="Baseball" stocked={true} prie={9.99} />
        <ProductRow name="Basketball" stocked={false} prie={29.99} />
        <ProductCategoryRow category="Electronics" />
        <ProductRow name="iPod Touch" stocked={true} prie={49.99} />
        <ProductRow name="iPhone 5" stocked={false} prie={9.99} />
        <ProductRow name="Nexus 7" stocked={true} prie={29.99} />
      </tbody>
    </table>
  );
}

function SearchBar(){
  return (
    <form style={{padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column"}}>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable(){
  return(
    <div style={{padding: "5px", border: "1px solid orange", display: "flex", flexDirection: "column"}}>
      <searchBar />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
