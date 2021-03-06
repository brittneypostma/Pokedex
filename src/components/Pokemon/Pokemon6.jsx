import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokeCard from '../PokeCard/PokeCard'
import { sendPokemon6 } from '../../redux/asyncThunks'
import './styles.css'

const Pokemon = () => {
  const error = useSelector(state => state.pokemon.hasError)
  const pending = useSelector(state => !state.pokemon.isLoaded)
  const search = useSelector(state => state.search.search)
  const pokemon = useSelector(state => state.pokemon.pokemon)
  const filteredPokemon = pokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sendPokemon6())
  }, [dispatch])
  return (
    <div className='pokemon'>
      {pending ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Uh oh! Something went wrong.</h2>
      ) : (
        Object.keys(filteredPokemon).map(one => {
          return <PokeCard name={one} key={filteredPokemon[one].id} />
        })
      )}
    </div>
  )
}

export default Pokemon
