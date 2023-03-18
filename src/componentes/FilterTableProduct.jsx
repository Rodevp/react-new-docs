import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterTableProduct({ products }) {
  return (
    <>
        <SearchBar />
        <ProductTable  products={products} />
    </>
  )
}

export default FilterTableProduct