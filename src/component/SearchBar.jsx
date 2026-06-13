import React from 'react'
import SearchIcon from '../icon/SearchIcon'

const SearchBar = ({height="300px",width="30px"}) => {
  return (
    <div>
        <div className="relative">
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <SearchIcon height={18} width={18} />
      </div>

      <input
        type="text"
        placeholder="Search Task"
        style={{ height, width }}
        className="border-0 rounded-tl-xl rounded-br-xl pl-8 pr-3 focus:outline-none shadow bg-gray-100"
      />
    </div>
    </div>
  )
}

export default SearchBar