import React from 'react'

const Pokemon = ({pokemonItem}) => {
  return (
    <div>
        <h2>{pokemonItem.name}</h2>
        <h2>{pokemonItem.url}</h2>
    </div>
  )
}

export default Pokemon