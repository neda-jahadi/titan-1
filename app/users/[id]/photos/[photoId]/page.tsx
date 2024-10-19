import React from 'react'
interface Props {
    params : { id: number , photoId: number}
}

const PhotoDetail = (props: Props) => {
  return (
    <div>
        <p>Photo id is {props.params.photoId}</p>
        <p>User id is {props.params.id} </p>
    </div>
  )
}

export default PhotoDetail