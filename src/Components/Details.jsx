import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const params  = useParams();

  console.log(params.id)
  return (
    <div>Details</div>
  )
}

export default Details