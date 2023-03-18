function ProductRow({ row }) {

  return (
    <div>
        <p>{row.name} <strong>{row.price}</strong> </p>
    </div>
  )
}

export default ProductRow