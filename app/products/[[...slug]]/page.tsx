import React from 'react'
interface Props {
    params : {slug: string[]}
}

const ProductPage = (props: Props) => {
  return (
    <div>ProductPage {props.params.slug} </div>
  )
}

export default ProductPage