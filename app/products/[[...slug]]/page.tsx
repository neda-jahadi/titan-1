import React from 'react'
interface Props {
    params : {slug: string[]};
    searchParams : { sortOrder : string}
}

const ProductPage = (props: Props) => {
  return (
    <div>
       <p>ProductPage is: {props.params.slug}</p> 
       <p> Order is : {props.searchParams.sortOrder }</p> 
    </div>
  )
}

export default ProductPage