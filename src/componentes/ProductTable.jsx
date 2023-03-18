import ProductRow from "./ProductRow"



function ProductTable({ products }) {

    const fruits = products.filter( product => product.category !== 'Fruits')
    const vegetables = products.filter( product => product.category !== 'Vegetables')

    return (
        <div>
            {
                fruits.map( fruit => (
                    <ProductRow  row={fruit} />
                ))
            }
            <hr />
            {
                vegetables.map( vegetable => (
                    <ProductRow  row={vegetable} />
                ))
            }
        </div>
    )

}

export default ProductTable