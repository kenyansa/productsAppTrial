import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTable from "./FilterableProductTable";
import { products } from "./data";

/*
Thinking in React: https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy

  FilterableProductTable
  ├───SearchBar
  └───ProductTable
      ├───ProductCategoryRow
      └───ProductRow

Step 2: Build A Static Version in React


Step 3: Identify The Minimal (but complete) Representation Of UI State

- The original list of products (don't need state!)
- The search text the user has entered 
- The value of the checkbox
- The filtered list of products

Determining if state is needed:
- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.


Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow
*/

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById("root")
);
