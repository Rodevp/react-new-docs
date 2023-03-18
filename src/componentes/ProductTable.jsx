import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"


function ProductTable({ products }) {

    const fruits = products.filter( product => product.category !== 'Fruits')
    const vegetables = products.filter( product => product.category !== 'Vegetables')

    return (
        <div>
            <ProductCategoryRow  category={fruits[0].category} />
            {
                fruits.map( fruit => (
                    <ProductRow  row={fruit} />
                ))
            }
            <hr />
            <ProductCategoryRow  category={vegetables[0].category} />
            {
                vegetables.map( vegetable => (
                    <ProductRow  row={vegetable} />
                ))
            }
        </div>
    )

}

export default ProductTable