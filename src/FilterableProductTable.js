import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }) {
    const [search, setSearch] = useState("Football");
    const [showInStock, setShowInStock] = useState(false)

  return (
    <div>
      <SearchBar search={search} showInStock = {showInStock} />
      <ProductTable products={products} search={search} showInStock = {showInStock} />
    </div>
  );
}

export default FilterableProductTable;
