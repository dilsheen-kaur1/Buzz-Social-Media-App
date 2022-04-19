import './Search.css'

function Search() {
  return (
    <div>
        <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/icons/search.png`} alt="search" className='search-image'/>
    </div>
  )
}

export default Search