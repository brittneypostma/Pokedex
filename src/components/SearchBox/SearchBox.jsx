import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slices/searchSlice'
import './styles.css'

const SearchBox = () => {
  const dispatch = useDispatch()
  return (
    <input
      onChange={e => dispatch(setSearch(e.target.value))}
      type='search'
      placeholder='search robots'
    />
  )
}

export default SearchBox
